import userContext from "./context";
import { useContext, useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import del from "./images/whitedelete.png";
import "./App.css";

export default function AllData({ setR, r }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [trigger, setTrigger] = useState(false);
  let ctx = useContext(userContext);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  }, [trigger]);

  const handleDelete = (userToDelete) => {
    let users = ctx.users.filter((i) => i.mail !== userToDelete?.mail);
    if (users) {
      ctx.users = users;
      alert(`${userToDelete.name} has been removed.`);
      setR(!r);
      setTrigger(!trigger);
    } else {
      alert("User not found");
    }
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    alert("Logout Successful!"); // Show alert first
    setTrigger(!trigger);
    setR(!r)
    window.location.hash = "#/home"; // Navigate to home page
  };

  return (
    <>
      <div className="table-parent">
        <h2 style={{ color: "white", textAlign: "end", marginTop: "10px" }}>All Data</h2>

        {currentUser === null ? null : (
          <Button
            type="submit"
            style={{
              backgroundColor: "#9d75cf",
              marginTop: "10px",
              marginBottom: "10px",
              color: "white",
              borderColor: "#9d75cf",
            }}
            onClick={logout}
          >
            Logout
          </Button>
        )}

        {currentUser === null ? (
          <h1>Please Login 🙏</h1>
        ) : (
          <div style={{ overflowX: "auto", maxWidth: "90%" }}>
            <Table bordered hover responsive className="custom-table">
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Id</th>
                  <th style={{ textAlign: "center" }}>Name</th>
                  <th style={{ textAlign: "center" }}>Email</th>
                  <th style={{ textAlign: "center" }}>Amount</th>
                  <th style={{ textAlign: "center" }}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {ctx.users.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.mail}</td>
                    <td>{item.balance}</td>
                    <td>
                      <button onClick={() => handleDelete(item)} style={{ backgroundColor: "#9d75cf", border: "none" }}>
                        <img src={del} style={{ width: "30px", height: "30px" }} alt="Delete" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
}



// import userContext from "./context";
// import { useContext, useState, useEffect } from "react";
// import { Table, Button } from "react-bootstrap";
// import del from "./images/whitedelete.png";
// import MyNavbar from "./navbar"; // Import Navbar
// import "./App.css";

// export default function AllData({ setR, r }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [trigger, setTrigger] = useState(false);
//   let ctx = useContext(userContext);

//   useEffect(() => {
//     let user = JSON.parse(localStorage.getItem("currentUser"));
//     setCurrentUser(user);
//   }, [trigger]);

//   const handleDelete = (userToDelete) => {
//     let users = ctx.users.filter((i) => i.mail !== userToDelete?.mail);
//     if (users) {
//       ctx.users = users;
//       alert(`${userToDelete.name} has been removed.`);
//       setR(!r);
//       setTrigger(!trigger);
//     } else {
//       alert("User not found");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("currentUser");
//     alert("Logout Successful!"); // Show alert first
//     setTrigger(!trigger);
//     setR(!r);
//     window.location.hash = "#/home"; // Navigate to home page
//   };

//   return (
//     <>
//       {/* Use Navbar with isAdminPage={true} to only show Home and Admin */}
//       <MyNavbar user={currentUser} isAdminPage={true} />

//       <div className="table-parent">
//         <h2 style={{ color: "white", textAlign: "end", marginTop: "10px" }}>All Data</h2>

//         {currentUser === null ? null : (
//           <Button
//             type="submit"
//             style={{
//               backgroundColor: "#9d75cf",
//               marginTop: "10px",
//               marginBottom: "10px",
//               color: "white",
//               borderColor: "#9d75cf",
//             }}
//             onClick={logout}
//           >
//             Logout
//           </Button>
//         )}

//         {currentUser === null ? (
//           <h1>Please Login 🙏</h1>
//         ) : (
//           <div style={{ overflowX: "auto", maxWidth: "90%" }}>
//             <Table bordered hover responsive className="custom-table">
//               <thead>
//                 <tr>
//                   <th style={{ textAlign: "center" }}>Id</th>
//                   <th style={{ textAlign: "center" }}>Name</th>
//                   <th style={{ textAlign: "center" }}>Email</th>
//                   <th style={{ textAlign: "center" }}>Amount</th>
//                   <th style={{ textAlign: "center" }}>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {ctx.users.map((item, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{item.name}</td>
//                     <td>{item.mail}</td>
//                     <td>{item.balance}</td>
//                     <td>
//                       <button onClick={() => handleDelete(item)} style={{ backgroundColor: "#9d75cf", border: "none" }}>
//                         <img src={del} style={{ width: "30px", height: "30px" }} alt="Delete" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
