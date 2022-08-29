import React, { useEffect, useState } from "react";

const ShowCategorySelected = ({ name, searchInput }) => {
  const [changed, setChanged] = useState(false);
  const foodParser = JSON.parse(localStorage.getItem("food"));
  const fitnesParser = JSON.parse(localStorage.getItem("fitnes"));
  const workParser = JSON.parse(localStorage.getItem("work"));
  const learnParser = JSON.parse(localStorage.getItem("learn"));

  const removeTodo = (id, array, localStorageText) => {
    setChanged(!changed);
    const removeArrFood = [...array].filter((todo) => todo.id !== id);
    localStorage.setItem(localStorageText, JSON.stringify(removeArrFood));
  };

  useEffect(() => {}, [changed]);

  return (
    <div className="to-do-wrapper">
      {name === "food"
        ? (foodParser || [])
            .filter((val) => {
              if (searchInput === "") {
                return val;
              } else if (
                val?.text?.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                console.log("val", val);
                return val;
              }
            })
            .map((item) => {
              if (Object.keys(item).length === 0) return;
              return (
                <p key={item.id}>
                  {item.text}
                  <span onClick={() => removeTodo(item.id, foodParser, "food")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </span>
                </p>
              );
            })
        : name === "fitnes"
        ? (fitnesParser || [])
            .filter((val) => {
              if (searchInput === "") {
                return val;
              } else if (
                val.text.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => {
              if (Object.keys(item).length === 0) return;
              return (
                <p key={item.id}>
                  {item.text}
                  <span
                    onClick={() => removeTodo(item.id, fitnesParser, "fitnes")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </span>
                </p>
              );
            })
        : name === "work"
        ? (workParser || [])
            .filter((val) => {
              if (searchInput === "") {
                return val;
              } else if (
                val.text.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => {
              if (Object.keys(item).length === 0) return;

              return (
                <p key={item.id}>
                  {item.text}
                  <span onClick={() => removeTodo(item.id, workParser, "work")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </span>
                </p>
              );
            })
        : name === "learn"
        ? (learnParser || [])
            .filter((val) => {
              if (searchInput === "") {
                return val;
              } else if (
                val.text.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => {
              return (
                <p key={item.id}>
                  {item.text}
                  <span
                    onClick={() => removeTodo(item.id, learnParser, "learn")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </span>
                </p>
              );
            })
        : ""}
    </div>
  );
};

export default ShowCategorySelected;
