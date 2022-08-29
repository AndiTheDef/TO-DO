import React from "react";

const Input = ({ onchange, input, placeholder }) => (
  <input
    onChange={onchange}
    type="text"
    placeholder={placeholder}
    value={input}
  />
);

export default Input;
