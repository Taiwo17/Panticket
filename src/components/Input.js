import React from 'react';
import './input.css';

const Input = ({ label, placeholder, type, name, onChange, value }) => {
  return (
    <div className='input-container'>
      <label htmlFor=''>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
