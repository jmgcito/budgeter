import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const dummyCategories = [
//   {
//     name: "Gym",
//     amount: 100,
//   },
//   {
//     name: "Food",
//     amount: 200,
//   },
//   {
//     name: "Transportation",
//     amount: 100,
//   },
//   {
//     name: "Personal",
//     amount: 20,
//   },
// ];
// const dummyBudget = 600;
// const dummyExPercent = 70;
// const dummySavPercent = 30;

const savedData = {
  savedCategories: [],
  savedBudget: 0,
  savedExpensePercent: 70,
  savedSavingsPercent: 30,
};

ReactDOM.render(
  <React.StrictMode>
    <App savedData={savedData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
