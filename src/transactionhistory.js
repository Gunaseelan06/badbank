import React, { useContext, useEffect, useState } from "react";
import { Table, Card, Button } from "react-bootstrap";
import userContext from "./context";
import './index.css';
export default function TransactionHistory({ setR, r}) {
    const[trigger,setTrigger] =useState(false)
    const ctx = useContext(userContext);
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (user && ctx.transactions) {
            const userTransactions = ctx.transactions.filter(tx => tx.email === user.mail);
            setTransactions(userTransactions);
        }
    }, [ctx.transactions, user,trigger]);

    
  const logout = () => {
    localStorage.removeItem("currentUser");
    alert("Logout Successful!"); // Show alert first
    setTrigger(!trigger);
    setR(!r)
    window.location.hash = "#/home"; // Navigate to home page
  };

    return (
        <div id="form-div">
            {user ? (
                <Card className="p-3">
                    <h3 style={{ color:" black"}}>Transaction History</h3>
                    <Button
                    type="submit"
                    className="center"
                    style={{
                    backgroundColor: "#9d75cf",
                    marginTop: "10px",
                    marginBottom: "10px",
                    color: "white",
                    borderColor: "#9d75cf",
                    width:" fit-content"
                    }}
                    onClick={logout}
                >
                    Logout
                </Button>
                    {transactions.length > 0 ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((tx, index) => (
                                    <tr key={index}>
                                        <td>{new Date(tx.date).toLocaleString()}</td>
                                        <td>{tx.type}</td>
                                        <td>₹{tx.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <p>No transactions found.</p>
                    )}
                </Card>
            ) : (
                <h3>Please log in to view transactions.</h3>
            )}
        </div>
    );
}
