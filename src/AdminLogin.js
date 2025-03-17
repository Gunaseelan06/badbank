import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

function AdminLogin({setR,r}) {
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const ADMIN_CREDENTIALS = {
        email: "admin@gmail.com",
        password: "admin789"
    };

    function handleAdminLogin() {
        if (adminEmail === ADMIN_CREDENTIALS.email && adminPassword === ADMIN_CREDENTIALS.password) {
            setMessage("Login successful! Redirecting...");
            localStorage.setItem("currentUser", JSON.stringify({name: 'admin', mail: 'admin@gmail.com', pass: 'admin789', balance: 0}));
            setR(!r)
            setTimeout(() => {
                navigate('/alldata');
            }, 1000);
        } else {
            setMessage("Invalid admin credentials. Please try again.");
        }
    }

    return (
        <div className="admin-container">
            <div className="login-box">
                <h2>Admin Login</h2>
                <input 
                    type="email" 
                    placeholder="Admin Email" 
                    value={adminEmail} 
                    onChange={(e) => setAdminEmail(e.target.value)} 
                    className="input-field"
                />
                <input 
                    type="password" 
                    placeholder="Admin Password" 
                    value={adminPassword} 
                    onChange={(e) => setAdminPassword(e.target.value)} 
                    className="input-field"
                />
                <button onClick={handleAdminLogin} className="login-button">
                    Login
                </button>

                {message && (
                    <p className={`message ${message.includes("successful") ? "success" : "error"}`}>
                        {message}
                    </p>
                )}
            </div>

            {/* <footer className="footer">
                <p>&copy; 2025, Guna Seelan</p>
            </footer> */}
        </div>
    );
}

export default AdminLogin;
