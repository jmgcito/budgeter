import React from "react";
import GetCategoryPercent from "./GetCategoryPercent";

function Category(props) {
  return (
    <div class="category-bubble">
      <input class="category-name" placeholder="Enter Category" />
      <p class="category-amount">
        ${(props.currMoney * props.percent * 0.01).toFixed(2)}
      </p>
      <div class="vl" />
      <div>
        <div class="percent-bubble">
          <GetCategoryPercent
            updatePercent={props.updatePercent}
            index={props.index}
            percent={props.percent}
          />
          <span>%</span>
        </div>
      </div>
    </div>
  );
}

export default Category;
