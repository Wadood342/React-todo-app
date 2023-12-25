
import React from 'react';

const Button = ({ onClick, label, icon }) => {
  return (
    <button type="button" className="btn btn-primary my-3 custom-btn" onClick={onClick}>
      {icon && <i className={`bi bi-${icon} me-2`}></i>}
      {label}
    </button>
  );
};

export default Button;
