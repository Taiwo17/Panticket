import React from 'react';
import './button.css';

const Button = ({ title, variation }) => {
  return (
    <>
      <button className={`${variation}-btn btn-style`}>{title}</button>
    </>
  );
};

export default Button;
