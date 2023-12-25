
import React from 'react';
import Button from './Button';

const Input = ({ value, onChange, onAddTodo, errorMessage }) => {
  return (
    <div className="row justify-content-center mb-3">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="input-group">
          <input
            type="text"
            className={`form-control ${errorMessage ? 'redBorder' : ''}`}
            value={value}
            onChange={onChange}
            style={{ width: '100%' }}
          /></div>

          <Button onClick={onAddTodo} label="Add Todo" icon="plus"  />
        
        {errorMessage && (
          <div className="validator text-center mt-2" style={{ backgroundColor: 'white', color: 'red' }}>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
