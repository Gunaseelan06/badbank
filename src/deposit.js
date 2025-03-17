import { useContext, useEffect, useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import userContext from "./context";
import './App.css';

export default function Deposit() {
    const [deposit, setDeposit] = useState();
    const [total, setTotal] = useState(0);
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const ctx = useContext(userContext);
    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        if (user) {
            let foundUser = ctx.users.find(i => i.mail === user.mail);
            if (foundUser) {
                setTotal(foundUser.balance);
                setName(foundUser.name);
                setId(foundUser._id);
            }
        }
    }, [user, ctx.users]);

    function changeHandler(val) {
        if (val.toString().length > 5) {
            alert("Amount should not exceed 5 digits.");
            return;
        }
        setDeposit(val);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (isNaN(deposit) || deposit <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        let foundUser = ctx.users.find(i => i.mail === user.mail);
        if (foundUser) {
            foundUser.balance += deposit;
            setTotal(foundUser.balance);

            // Ensure transactions array exists
            if (!ctx.transactions) {
                ctx.transactions = [];
            }

            ctx.transactions.push({
                userId: user._id,
                email: user.mail,
                type: "Deposit",
                amount: deposit,
                date: new Date().toISOString()
            });

            setDeposit("");
            alert(`Amount $${deposit} Deposit successfully!`);
        }
    }

    return (
        <div id="form-div">
            {name ? (
                <>
                    <h3>Account Balance: ₹{total}</h3>
                    <Card  className="form-inline">
                        <Form onSubmit={submitHandler}>
                            <h1>Deposit</h1>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" value={name} disabled className="input-box" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="Enter amount" onChange={(e) => changeHandler(Number(e.target.value))} className="input-box" value={deposit} />
                            </Form.Group>
                            <Button type='submit' className='create-btn' style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }}>Deposit</Button>
                        </Form>
                    </Card>
                </>
            ) : (
                <h3>Please log in to deposit funds.</h3>
            )}
        </div>
    );
}
