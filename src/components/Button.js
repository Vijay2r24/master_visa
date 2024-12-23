import React from "react";

// Reusable Button Component
const Button = ({ children, onClick, style, className }) => {
  return (
    <button onClick={onClick} style={style} className={className}>
      {children}
    </button>
  );
};

export default Button;
