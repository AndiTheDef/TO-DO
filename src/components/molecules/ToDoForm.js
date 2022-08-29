import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const ToDo = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [input, setInput] = useState("");
  const onchange = (e) => {
    setToDo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodos = [toDo, ...toDoList];
    setToDoList(newTodos);
    setInput("");
  };

  return (
    <div>
      <div className="container">
        <div className="newtask">
          <form onSubmit={onSubmit}>
            <Input onchange={onchange} input={input} />
            <Button />
          </form>
        </div>
        {toDoList?.map((item) => (
          <div className="tasks">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
