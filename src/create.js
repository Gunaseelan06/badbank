import Form from 'react-bootstrap/Form';
import { Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from './context';

export default function Create() {
  let ctx = useContext(userContext);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  function handleInputChange(e, setter, field) {
    const value = e.target.value;

    if (field === 'name') {
      if (/\d/.test(value)) {
        alert("Name should not contain numbers!");
        return;
      }
      setName(value);
    } else if (field === 'email') {
      setMail(value);
    } else if (field === 'password') {
      setPass(value);
    }
  }

  useEffect(() => {
    validateForm();
  }, [name, mail, pass]);

  function validateForm() {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    const isValidPassword = passwordRegex.test(pass);
    const isEmailUnique = !ctx.users.some(user => user.mail === mail);

    setIsValid(name !== '' && mail !== '' && isValidPassword && isEmailUnique);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(pass)) {
      alert("Password must contain at least 8 characters, one uppercase letter, one special character, and one number.");
      return;
    }

    let userExist = ctx.users.some((user) => user.mail === mail);
    if (userExist) {
      setErrorMessage("This email is already registered. Please use a different email.");
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    ctx.users.push({ name, mail, pass, balance: 0 });
    setSuccessMessage("Account created successfully! Redirecting to login page...");
    setTimeout(() => navigate('/login'), 3000);
    
    setName('');
    setMail('');
    setPass('');
  }

  return (
    <>
      <Card style={{ border: "none" }} className='create-card'>
        <div id='form-div'>
          {errorMessage && (
            <Alert variant="danger" className="error-alert" dismissible onClose={() => setErrorMessage('')}>
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert variant="success" className="success-alert">
              {successMessage}
            </Alert>
          )}
          <Form className="form-inline" onSubmit={submitHandler}>
            <h1>Create Account</h1>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter name" onChange={(e) => handleInputChange(e, setName, 'name')} value={name} className="input-box" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleInputChange(e, setMail, 'email')} value={mail} autoComplete="off" className="input-box" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Password" onChange={(e) => handleInputChange(e, setPass, 'password')} value={pass} className="input-box" />
            </Form.Group>

            <div className='create-btn-parent'>
              <Button type='submit' className='create-btn splBtn' disabled={!isValid} style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }}>Create Account</Button>
              {/* <Button type='reset' className='create-btn' onClick={() => { setName(''); setMail(''); setPass(''); }}>Add another account</Button> */}
            </div>
          </Form>
        </div>
      </Card>
    </>
  );
}