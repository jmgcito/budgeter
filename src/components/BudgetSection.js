import { useState } from "react";

import Category from "./Category";

const CategoryForm = ({
  remaining,
  newAmount,
  newCategoryName,
  onClick,
  onCategoryNameChange,
  onAmountChange,
}) => {
  return (
    <form>
      <div>
        Add a new category <br />
        <input
          className="category-name"
          value={newCategoryName}
          onChange={onCategoryNameChange}
        />
        <br />
        Amount: $
        <input
          type="number"
          step=".01"
          min={0}
          max={remaining}
          value={newAmount}
          onChange={onAmountChange}
        />
        <br />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </div>
    </form>
  );
};

const BudgetSection = ({ title, budgetAmount, savedCategories = [] }) => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newAmount, setNewAmount] = useState(0);
  const [categories, setCategories] = useState(savedCategories);

  const handleCategoryNameChange = (event) => {
    setNewCategoryName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setNewAmount(event.target.value);
  };

  const addCategory = (event) => {
    event.preventDefault();

    const newCategory = {
      name: newCategoryName,
      amount: Number(newAmount),
    };
    setNewAmount(0);
    setNewCategoryName("");
    setCategories(categories.concat(newCategory));
  };

  const removeCategory = (index) => {
    const newCategories = [
      ...categories.slice(0, index),
      ...categories.slice(index + 1),
    ];

    setCategories(newCategories);
  };

  const categoriesArray = categories.map((category, index) => (
    <Category
      key={category.name}
      name={category.name}
      amount={category.amount}
      removeCategory={removeCategory}
      index={index}
      onClick={() => removeCategory(index)}
    />
  ));

  const totalUsed = categories.reduce(
    (sum, category) => category.amount + sum,
    0
  );

  const remaining = budgetAmount - totalUsed;

  return (
    <section className="body-container move-up">
      <h2>{title}</h2>
      <p>
        Total {title}: ${budgetAmount}
      </p>

      {categoriesArray.length > 0
        ? categoriesArray
        : "No categories have been added."}

      <p>Remaining: ${remaining}</p>

      {remaining === 0 ? (
        <div>{title} limit reached</div>
      ) : (
        <CategoryForm
          remaining={remaining}
          newCategoryName={newCategoryName}
          newAmount={newAmount}
          onCategoryNameChange={handleCategoryNameChange}
          onAmountChange={handleAmountChange}
          onClick={addCategory}
        />
      )}
    </section>
  );
};

export default BudgetSection;
