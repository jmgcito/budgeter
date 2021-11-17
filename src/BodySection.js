import React from "react";
import Category from "./Category";

class BodySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percents: [100],
    };
    this.addCategory = this.addCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.updatePercent = this.updatePercent.bind(this);
  }

  addCategory() {
    const percents = this.state.percents;
    const lastPercent = percents[percents.length - 1];
    const avg = lastPercent / 2;
    let newArray = percents;
    newArray.pop();
    //when adding a new category, divides last percent into two smaller percents
    for (let i = 0; i < 2; i++) {
      newArray.push(avg);
    }

    this.setState({
      percents: [...newArray],
    });
  }

  removeCategory() {
    const percents = this.state.percents;
    //when removing category, doubles percent of last index
    if (percents.length > 1) {
      percents.pop();
      let newArray = percents;
      newArray[newArray.length - 1] = newArray[newArray.length - 1] * 2;

      this.setState({
        percents: [...newArray],
      });
    }
  }
  updatePercent(event, index, previousValue) {
    let percents = this.state.percents;
    const newPercent = event.target.value;
    let nextPercent = previousValue;

    if (newPercent > previousValue) {
      nextPercent = nextPercent - (newPercent - previousValue);
    }
    percents[index] = newPercent;
    percents[index + 1] = nextPercent;

    this.setState({
      percents: [...percents],
    });
  }

  render() {
    const categoriesArray = this.state.percents.map((percent, index) => (
      <Category
        currMoney={this.props.currMoney}
        percent={percent}
        removeCategory={this.removeCategory}
        categories={this.state.categories}
        index={index}
        updatePercent={this.updatePercent}
      />
    ));
    return (
      <section class="container move-up">
        <p>
          <h2>{this.props.title}</h2>${this.props.currMoney}
        </p>
        {categoriesArray}
        <div style={{ position: "relative", left: 110, bottom: 5 }}>
          <button onClick={this.addCategory}>+</button>
          <button onClick={this.removeCategory}>x</button>
        </div>
      </section>
    );
  }
}

export default BodySection;
