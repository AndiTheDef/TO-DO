import { Button, Select } from "antd";
import React, { useEffect, useState } from "react";
import ButtonForm from "../atoms/Button";
import Input from "../atoms/Input";
import ShowCategorySelected from "../molecules/ShowCategorySelected";

const ToDoForm = () => {
  const [toDo, setToDo] = useState([]);
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectValue, setSelectValue] = useState("food");

  const [valueBtn, saveValueBtn] = useState("food");
  const onchange = (e) => {
    setToDo(e.target.value);
    setInput(e.target.value);
  };
  const handleOnChange = (e) => setSelectValue(e);

  useEffect(() => {
    handeOnClick(valueBtn);
  }, [valueBtn]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    setInput("");
    const watchFood =
      JSON.parse(localStorage.getItem("food")) == null
        ? [{}]
        : JSON.parse(localStorage.getItem("food"));
    const watchFitnes =
      JSON.parse(localStorage.getItem("fitnes")) == null
        ? [{}]
        : JSON.parse(localStorage.getItem("fitnes"));
    const watchLearn =
      JSON.parse(localStorage.getItem("learn")) == null
        ? [{}]
        : JSON.parse(localStorage.getItem("learn"));
    const watchWork =
      JSON.parse(localStorage.getItem("work")) == null
        ? [{}]
        : JSON.parse(localStorage.getItem("work"));

    const food = [
      { id: Math.floor(Math.random() * 100000), text: toDo },
      ...watchFood,
    ];

    const fitnes = [
      { id: Math.floor(Math.random() * 100000), text: toDo },
      ...watchFitnes,
    ];

    const learn = [
      { id: Math.floor(Math.random() * 100000), text: toDo },
      ...watchLearn,
    ];

    const work = [
      { id: Math.floor(Math.random() * 100000), text: toDo },
      ...watchWork,
    ];

    if (selectValue === "food") {
      localStorage.setItem("food", JSON.stringify(food));
    }
    if (selectValue === "fitnes") {
      localStorage.setItem("fitnes", JSON.stringify(fitnes));
    }
    if (selectValue === "learn") {
      localStorage.setItem("learn", JSON.stringify(learn));
    }
    if (selectValue === "work") {
      localStorage.setItem("work", JSON.stringify(work));
    }
  };

  const handeOnClick = (value) => () => {
    saveValueBtn(value);
  };

  return (
    <div>
      <div className="container">
        <div className="newtask">
          <input
            placeholder="Search here..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <form onSubmit={onSubmit}>
            <div className="form-wrapper">
              <Input
                placeholder="Add Tasks"
                onchange={onchange}
                input={input}
              />
              <Select
                size="large"
                onChange={handleOnChange}
                defaultValue="food"
                style={{ width: 120 }}
                placeholder="Select category"
              >
                <Select.Option value="food">Food</Select.Option>
                <Select.Option value="fitnes">Fitnes</Select.Option>
                <Select.Option value="learn">Learn</Select.Option>
                <Select.Option value="work">Work</Select.Option>
              </Select>
            </div>
            <div className="form-wrapper-btn">
              <ButtonForm />
            </div>
          </form>
          <div className="btn-wrapper">
            <Button onClick={handeOnClick("food")}>Food</Button>
            <Button onClick={handeOnClick("fitnes")}>Fitnes</Button>
            <Button onClick={handeOnClick("learn")}>Learn</Button>
            <Button onClick={handeOnClick("work")}>Work</Button>
          </div>
          {<ShowCategorySelected name={valueBtn} searchInput={searchInput} />}
        </div>
      </div>
    </div>
  );
};

export default ToDoForm;
