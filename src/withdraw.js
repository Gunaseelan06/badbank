// import userContext from "./context";
// import {useContext, useState,useEffect} from 'react';
// import {Button,Form,Card} from 'react-bootstrap';
// import axios from 'axios';
// import Footer from "./footer";

// export default function Withdraw(){

    
//     const [withdraw,setWithdraw]=useState();
//     const[data,setData]=useState([])
//     var [total,setTotal]=useState();
//     var [amount,setAmount]=useState();
//     const[name,setName]=useState('');
//     const[pass,setPass]=useState('');
//     const [details, setDetails] = useState(false)
//     let [id,setId]=useState()
    
//     useEffect(() => {
//         let user = JSON.parse(localStorage.getItem("currentUser"))
//         async function fetchdata() {
//             await axios.get('https://server-h269.onrender.com/data').then((item) => {
//              setData(item.data);
//              console.log(data);
//              let users = item?.data?.find(i=> i?._id ===user?._id);
//                 if (users) {
//                     setTotal(users.amount);
//                 }
//             })
//         }
//         fetchdata();
//         setName(user?.name)
//         setId(user?._id)
//         setAmount(user?.amount)
//     }, [total])

//     async function submitHandler(e){   
//         e.preventDefault();
//         console.log(id,"id")
       
//         if(isNaN(withdraw) || withdraw < 0){
//             alert("Please enter a valid amount....")
//         }
//         else if(withdraw > total){
//             alert("Insufficient account balance !!!")
//         }
//         else{
                
//             await axios.put(`https://server-h269.onrender.com/update/${id}`,{amount:total-withdraw}).then( setTotal(total - withdraw)).then(alert(`amount ${withdraw} is withdrawn successfully !`));
//             setWithdraw('')
//         }
        
//     }

//     function changeHandler(val,setter){
//         setter(val);
//        withdraw !== undefined ? document.querySelector(".create-btn").classList.remove("disabled") : document.querySelector(".create-btn").classList.add("disabled")  
//       }


//     //   function userHandler(e){
//     //     e.preventDefault()
//     //    let currentUser = data.find((item)=>item.name === name && item.password === pass)
      
//     // if(currentUser){
//     //     console.log(currentUser);
//     //     setTotal(currentUser.amount);
//     //     setId(currentUser._id)
//     //     setDetails(true);
//     // }
//     // else{
//     //     alert("Enter correct account holder name and password")
//     // }
      
    
//     // }

// //  ctx.users[0].amount=total
//  return(<>
//  {
//     // !details ?  <>
//     // <div id='form-div'>
//     //     <>
            
//     //         <Card>
//     //             <Form className="form-inline" onSubmit={userHandler}>
//     //                 <h1>Account Details</h1>
//     //                 <Form.Group className="mb-3">
//     //         <Form.Control type="text" placeholder="Enter Account holder name" onChange={e=>setName(e.target.value)} className="input-box"/>
//     //     </Form.Group>
//     //     <Form.Group className="mb-3">
//     //         <Form.Control type="password" placeholder="Enter password" onChange={(e)=>setPass(e.target.value)} className="input-box"/>
//     //     </Form.Group>
                   
//     //                 <Button type='submit' className='btn' style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }} disabled={name ==='' || pass ===''}>Enter</Button>
//     //             </Form>
//     //         </Card> </>
//     // </div></>  :
//      <>

//     <div id='form-div'>
//     <h3>Account Balance: {total===0 ? amount : total }</h3> 
//     <Card>
//         <Form className="form-inline" onSubmit={submitHandler}>  
//     <h1>Withdraw</h1>
//     <Form.Group className="mb-3">
//             <Form.Control type="text" placeholder="Enter Account holder name" value={name} disabled  className="input-box"/>
//        </Form.Group>
//         <Form.Group className="mb-3">
//             <Form.Control type="number" placeholder="Enter amount"  onChange={(e)=>changeHandler(Number(e.target.value),setWithdraw)} className="input-box"/>
//         </Form.Group>
//             <Button type='submit' className='create-btn' style={{backgroundColor:'#9d75cf' , color:'white', borderColor:'#9d75cf'}} value={withdraw}>Withdraw</Button>
//     </Form>
//     </Card>
//     </div>
   
//     </>
//  }
//   {/* <Footer  position="fixed"/> */}
//     </>)
//     }



import { useContext, useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import userContext from "./context";
import "./App.css";

export default function Withdraw() {
    const [withdraw, setWithdraw] = useState();
    const [total, setTotal] = useState(0);
    const [name, setName] = useState("");

    const ctx = useContext(userContext);
    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        if (user) {
            let foundUser = ctx.users.find(i => i.mail === user.mail);
            if (foundUser) {
                setName(foundUser.name);
                setTotal(foundUser.balance);
            }
        }
    }, [user, ctx.users]);

    function submitHandler(e) {
        e.preventDefault();
        if (isNaN(withdraw) || withdraw <= 0) {
            alert("Please enter a valid withdrawal amount.");
            return;
        }
        if (withdraw > total) {
            alert("Insufficient account balance!");
            return;
        }

        let foundUser = ctx.users.find(i => i.mail === user.mail);
        if (foundUser) {
            foundUser.balance -= withdraw;
            setTotal(foundUser.balance);

            // Ensure transactions array exists
            if (!ctx.transactions) {
                ctx.transactions = [];
            }

            ctx.transactions.push({
                userId: user._id,
                email: user.mail,
                type: "Withdraw",
                amount: withdraw,
                date: new Date().toISOString()
            });

            setWithdraw("");
            alert(`Amount $${withdraw} withdrawn successfully!`);
        }
    }

    return (
        <div id="form-div">
            {name ? (
                <>
                    <h3>Account Balance: ₹{total}</h3>
                    <Card className="form-inline">
                        <Form onSubmit={submitHandler}>
                            <h1>Withdraw</h1>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" value={name} disabled className="input-box" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="Enter amount" value={withdraw} onChange={(e) => setWithdraw(Number(e.target.value))} className="input-box" />
                            </Form.Group>
                            <Button type="submit" className="create-btn" style={{ backgroundColor: "#9d75cf", color: "white", borderColor: "#9d75cf" }}>Withdraw</Button>
                        </Form>
                    </Card>
                </>
            ) : (
                <h3>Please log in to withdraw funds.</h3>
            )}
        </div>
    );
}
