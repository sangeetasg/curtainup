import React from "react";
import PropTypes from 'prop-types';
import siteLogo from "../../../assets/images/cu-logo.png";
import "./auth.css";


const Auth = ({ heading, children}) =>{
  
  return (
    <div className="page-auth d-flex flex-1">
      <div className="page-auth-wrapper d-flex flex-1">
        <div className="page-logo-section">
          <a href="#" className="auth-logo d-block mx-auto">
            <img src={siteLogo} alt="logo" />
          </a>
        </div>
        <div className="page-auth-section d-flex flex-1 align-items-center justify-content-center">
          
        </div>
      </div>
    </div>
  );
};

Auth.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Auth;
