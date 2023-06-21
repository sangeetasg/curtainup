import React from "react";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";


const ButtonIcon = ({ className, onClick, children, isdisabled }) => {

  return (
    <Button
      variant="link"
      className={`d-flex align-items-center justify-content-center text-decoration-none ${className}`}
      onClick={onClick}
      disabled={isdisabled}
    >
      {children}
    </Button>
  );
};


ButtonIcon.defaultProps = {
  className: '',
};

ButtonIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled:PropTypes.bool
};

export default ButtonIcon;
