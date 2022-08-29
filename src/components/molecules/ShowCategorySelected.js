import React from "react";

const ShowCategorySelected = ({ name }) => {
  const foodParser = JSON.parse(localStorage.getItem("food"));
  const fitnesParser = JSON.parse(localStorage.getItem("fitnes"));
  const workParser = JSON.parse(localStorage.getItem("work"));
  const learnParser = JSON.parse(localStorage.getItem("learn"));
  return (
    <div>
      {name === "food"
        ? (foodParser || []).map((item) => <p> {item.text}</p>)
        : name === "fitnes"
        ? (fitnesParser || []).map((item) => <p> {item.text}</p>)
        : name === "work"
        ? (workParser || []).map((item) => <p> {item.text}</p>)
        : name === "learn"
        ? (learnParser || []).map((item) => <p> {item.text}</p>)
        : ""}
    </div>
  );
};

export default ShowCategorySelected;
