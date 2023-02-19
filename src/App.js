import { useState } from "react";

import "./styles/budgeter.css";

import Header from "./components/Header";
import BudgetSection from "./components/BudgetSection";

const App = ({ savedData }) => {
  const {
    savedCategories,
    savedBudget,
    savedExpensePercent,
    savedSavingsPercent,
  } = savedData;
  const [totalBudget, setBudget] = useState(savedBudget);
  const [expensePercent, setExpensePercent] = useState(savedExpensePercent);
  const [savingsPercent, setSavingsPercent] = useState(savedSavingsPercent);

  const changeBudget = (event) => {
    setBudget(event.target.value);
  };

  const changeExpensePercent = (event) => {
    setExpensePercent(event.target.value);
    setSavingsPercent(100 - event.target.value);
  };

  const changeSavingsPercent = (event) => {
    setExpensePercent(100 - event.target.value);
    setSavingsPercent(event.target.value);
  };

  return (
    <div>
      <Header
        currMoney={totalBudget}
        changeMoney={changeBudget}
        exPercent={expensePercent}
        savPercent={savingsPercent}
        changeExPercent={changeExpensePercent}
        changeSavPercent={changeSavingsPercent}
      />

      {expensePercent < 1 ? (
        <div>No Expenses</div>
      ) : (
        <BudgetSection
          title={"Expenses"}
          budgetAmount={(totalBudget * expensePercent * 0.01).toFixed(2)}
          percent={expensePercent}
          savedCategories={savedCategories}
        />
      )}

      <hr />

      {savingsPercent < 1 ? (
        <div>No Savings</div>
      ) : (
        <BudgetSection
          title={"Savings"}
          budgetAmount={(totalBudget * savingsPercent * 0.01).toFixed(2)}
          percent={savingsPercent}
        />
      )}

      <footer>
        <a href="https://joshuaguillen.com/" className="credit">
          joshua m guillen
        </a>
      </footer>
    </div>
  );
};

export default App;
