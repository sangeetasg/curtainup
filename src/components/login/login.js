import React, { useState } from 'react';
import { Form, Button, InputGroup } from "react-bootstrap";
import { BsEyeFill } from "react-icons/bs";
import Auth from "../shared/Auth";


const Login = () => {

  const [isPasswordAutofilled, setPasswordAutofilled] = useState(true);

  const handlePasswordChange = (event) => {
    const isAutofilled = event.target.value !== "";
    setPasswordAutofilled(isAutofilled);
  };
  return (
    <>
      <Auth authHeading="Sign in">
        <Form className='d-grid gap-4'>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control className="p-3 bg-white" type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className={`cu-addon-group ${isPasswordAutofilled ? "input-filled-state" : ""}`}  controlId="formPlaintextPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control className="p-3 bg-white" type="password" placeholder="Enter your password" onChange={handlePasswordChange}/>
            </InputGroup>
            <div className='form-control-icon'>
              <BsEyeFill className="fs-6" />
            </div>
          </Form.Group>
          <Form.Group className="d-grid pt-2">
            <Button variant="primary" type="submit" className="text-uppercase py-3 fw-bold">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Auth>
    </>
  )
}

export default Login;