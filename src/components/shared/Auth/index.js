import React from "react";
import PropTypes from 'prop-types';
import siteLogo from "../../../assets/images/cu-logo.png";
import "./auth.scss";
import { Card } from "react-bootstrap";


const Auth = ({ authHeading, children}) =>{
  
  return (
    <div className="page-auth d-flex flex-1">
      <div className="page-auth-wrapper d-flex flex-1 p-4">
        <div className="page-logo-section">
          <div className="auth-logo mx-auto">
            <img src={siteLogo} alt="logo" />
          </div>
        </div>
        <div className="page-auth-section d-flex flex-1 align-items-center justify-content-center">
          <Card className="card-auth border-0 bg-transparent flex-1">
            <Card.Body className="p-0">
              <Card.Title className="fs-4 fw-bold mb-0">{authHeading}</Card.Title>
              <span className="d-block fs-sm mb-5">Enter your details below.</span>
                {children}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

Auth.propTypes = {
  authHeading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Auth;
