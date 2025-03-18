// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import './App.css';


// export default function MyNavbar({user}){
//   let style={color:'#fff'} 
//   return (<>
//   <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#9d75cf',boxShadow:"5px 5px 20px gray",zIndex:1000}}>
//         <Container>
//           {/* <span>
//           <img src={logo} width="50px" height='50px'/>
//           </span> */}
//           {
//             window.innerWidth > 1000 ?  <Navbar.Brand href="#" style={style}><h3>Bad Bank</h3></Navbar.Brand> : null
//           }
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav" className='mb-3 justify-content-end'>
//         <Nav sticky="top"> 
//         <Nav.Item>
//         <Nav.Link href="#/home" style={style}>Home</Nav.Link>
//         {/* <span className='desc'>Home page</span> */}
//       </Nav.Item>      
//       <Nav.Item>
//         <Nav.Link href="#/create" style={style}>Create</Nav.Link>
//         {/* <span className='desc'>create account here</span> */}
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="#/login" style={style}>Login</Nav.Link>
//         {/* <span className='desc'>create account here</span> */}
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="#/AdminLogin" style={style}>Admin</Nav.Link>
//         {/* <span className='desc'>create account here</span> */}
//       </Nav.Item>
//      {user===null ? null :
//      <><Nav.Item>
//         <Nav.Link href="#/deposit" style={style}>Deposit</Nav.Link>
//         {/* <span className='desc'> deposit amount here</span> */}
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="#/withdraw" style={style}>Withdraw</Nav.Link>
//         {/* <span className='desc'>withdraw amount here</span> */}
//       </Nav.Item>
//       <Nav.Item>
//       {user?.name==="admin" ?<Nav.Link href="#/alldata" style={style}>AllData</Nav.Link>
//       :

//         <Nav.Link href="#/transactionhistory" style={style}>History</Nav.Link>}
//         {/* <span className='desc'>click to view all data</span> */}
//       </Nav.Item>
//       </>}
//     </Nav>
//     </Navbar.Collapse>
//     </Container>
//   </Navbar>
        
    
//     </>
//   );
// }




import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';

export default function MyNavbar({ user }) {
  let style = { color: '#fff' };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: '#9d75cf',
          boxShadow: '5px 5px 20px gray',
          zIndex: 1000,
        }}
      >
        <Container>
          {window.innerWidth > 1000 ? (
            <Navbar.Brand href="#" style={style}>
              <h3>Bad Bank</h3>
            </Navbar.Brand>
          ) : null}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="mb-3 justify-content-end">
            <Nav sticky="top">
              {/* Home & Admin Links are always visible */}
              <Nav.Item>
                <Nav.Link href="#/home" style={style}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/AdminLogin" style={style}>
                  Admin
                </Nav.Link>
              </Nav.Item>

              {/* Show Create and Login only if user is not logged in */}
              {user === null && (
                <>
                  <Nav.Item>
                    <Nav.Link href="#/create" style={style}>
                      Create
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#/login" style={style}>
                      Login
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}

              {/* Show banking-related pages only if user is logged in */}
              {user !== null && (
                <>
                <>
                {user?.name === 'admin' ? null :
                <> <Nav.Item>
                    <Nav.Link href="#/deposit" style={style}>
                      Deposit
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#/withdraw" style={style}>
                      Withdraw
                    </Nav.Link>
                  </Nav.Item>
                  </>}
                  </>
                  <Nav.Item>
                    {user?.name === 'admin' ? (
                      <Nav.Link href="#/alldata" style={style}>
                        AllData
                      </Nav.Link>
                    ) : (
                      <Nav.Link href="#/transactionhistory" style={style}>
                        History
                      </Nav.Link>
                    )}
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}




// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import './App.css';

// export default function MyNavbar({ user, isAdminPage = false }) {
//   let style = { color: '#fff' };

//   return (
//     <>
//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         style={{
//           backgroundColor: '#9d75cf',
//           boxShadow: '5px 5px 20px gray',
//           zIndex: 1000,
//         }}
//       >
//         <>
//           {/* {window.innerWidth > 1000 ? (
//             <Navbar.Brand href="#" style={style}>
//               <h3>Bad Bank</h3>
//             </Navbar.Brand>
//           ) : null} */}

//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav" className="mb-3 justify-content-end">
//             <Nav sticky="top">
//               {/* Always show Home & Admin */}
//               {/* <Nav.Item>
//                 <Nav.Link href="#/home" style={style}>
//                   Home
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link href="#/AdminLogin" style={style}>
//                   Admin
//                 </Nav.Link>
//               </Nav.Item> */}

//               {/* If on the Admin page (AllData), stop rendering other links */}
//               {!isAdminPage && (
//                 <>
//                   {/* Show Create and Login only if user is not logged in */}
//                   {user === null && (
//                     <>
//                       <Nav.Item>
//                         <Nav.Link href="#/create" style={style}>
//                           Create
//                         </Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link href="#/login" style={style}>
//                           Login
//                         </Nav.Link>
//                       </Nav.Item>
//                     </>
//                   )}

//                   {/* Show Deposit, Withdraw, and History/AllData only if logged in */}
//                   {user !== null && (
//                     <>
//                       <Nav.Item>
//                         <Nav.Link href="#/deposit" style={style}>
//                           Deposit
//                         </Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link href="#/withdraw" style={style}>
//                           Withdraw
//                         </Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         {user?.name === 'admin' ? (
//                           <Nav.Link href="#/alldata" style={style}>
//                             AllData
//                           </Nav.Link>
//                         ) : (
//                           <Nav.Link href="#/transactionhistory" style={style}>
//                             History
//                           </Nav.Link>
//                         )}
//                       </Nav.Item>
//                     </>
//                   )}
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </>
//       </Navbar>
//     </>
//   );
// }
