import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import "./index.css";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from 'axios';
import userContext from "./context";

const Login = ({setR,r}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([])
  const[trigger,setTrigger]=useState(false);
  const navigate = useNavigate(); // Declare navigate

  let ctx = useContext(userContext)

  const handleLogin = (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Corrected regex
    
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password === "") {
      alert("Password cannot be empty.");
      return;
    } else if (password.length < 8) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // // Save email to localStorage
    // localStorage.setItem("userEmail", email);
    // alert("Login Successful!"); // Display alert

    // // After alert, navigate to the transaction page or login page
    // navigate("#/deposit"); // Redirect to transaction page (or change route as needed)
    
        e.preventDefault()
        console.log(ctx,"sss")
        let currentUser = ctx.users.find((item) => item.mail === email && item.pass === password)
        console.log("currentUser", currentUser);
        if (currentUser) {
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          alert("Login Successful!");
          setR(!r)
            window.location.hash = "#/deposit";
        }
        else {
            alert("Enter correct account email and password")
        }
  };

  return (
    <Card style={{border:"none"}} className='create-card'>
     <div id='form-div'>
     <Form className="form-inline" onSubmit={handleLogin}>
    {/* <div className="container-fluid">
       <div className="row intro py-1" style={{ backgroundColor: "#82E0AA" }}>
        <div className="col-sm-12 col-md">
          <div className="heading text-center my-5">
            <h3>Welcome to</h3>
            <h1>BAD BANK</h1>
            <p>Secure, simple, and convenient banking for everyone.</p>
          </div>
        </div>
      </div> */}

      {/* <div id="login-area" className="text-center my-4">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <Link to="/Create" style={{ textDecoration: "none" }}>
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "#ccc",
                }}
              ></div>
              <h5>Create an Account / Sign Up</h5>
            </Link>
          </div> */}

          <div className="col-md-12">
            <div className="submit-area">
              <h2>Login</h2>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <button
              style={{backgroundcolor:" #9d75cf"}}
                onClick={handleLogin}
                className="button"
              >
                Login
              </button>
              <div className="mt-3">
                <Link
                  to="/forgot"
                  id="forgot-password"
                  style={{ textDecoration: "none" }}
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
          </Form>
          </div>
     {/*   </div>
      </div>
      
      </div> */}
      </Card >

  );
};

export default Login;
