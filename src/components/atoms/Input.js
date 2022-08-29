import React from "react";

const Input = ({ onchange, input }) => (
  <input
    onChange={onchange}
    type="text"
    placeholder="Add Tasks"
    value={input}
  />
);

export default Input;
