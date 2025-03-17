import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './navbar';
import Create from './create';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import Home from './home';
import Login from './login';
import AdminLogin from './AdminLogin';
import TransactionHistory from './transactionhistory';
import { useEffect, useState } from 'react';

function App() {
  const [n, setN] = useState(null);
  const [r, setR] = useState(false);

  let user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    setN(user);
  }, [r]);

  return (
    <>
    <MyNavbar user={n} />
    <div className="app-container">
    

      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/adminlogin' element={<AdminLogin  setR={setR} r={r} />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/login' element={<Login setR={setR} r={r} />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/alldata' element={<AllData setR={setR} r={r} />} />
          <Route path="/transactionhistory" element={<TransactionHistory   setR={setR} r={r}/>} />
        </Routes>
      </HashRouter>
    </div></>
  );
}

export default App;
