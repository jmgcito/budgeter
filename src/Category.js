import GetCategoryPercent from "./GetCategoryPercent";

function Category(props) {
  return (
    <div class="category-bubble">
      <input class="category-name" placeholder="Essentials" />
      <p class="category-amount">
        ${(props.currMoney * props.percent * 0.01).toFixed(2)}
      </p>
      <div class="vl" />
      <GetCategoryPercent
        class="category-percent"
        updatePercent={props.updatePercent}
        index={props.index}
        percent={props.percent}
      />
    </div>
  );
}

export default Category;
