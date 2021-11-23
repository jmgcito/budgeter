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
    //when removing category, adds last two percents
    if (percents.length > 1) {
      let lastPercent = percents[percents.length - 1];
      percents.pop();
      let newArray = percents;
      newArray[newArray.length - 1] =
        Number(newArray[newArray.length - 1]) + Number(lastPercent);

      this.setState({
        percents: [...newArray],
      });
    }
  }
  updatePercent(event, index, previousValue) {
    let percents = this.state.percents;
    const eventPercent = event.target.value;
    let nextPercent = 0;

    if (index + 1 == percents.length) {
      nextPercent = percents[0];
    } else {
      nextPercent = percents[index + 1];
    }

    if (eventPercent >= 0 && eventPercent <= 100) {
      if (nextPercent != 0) {
        nextPercent = nextPercent - (eventPercent - previousValue);
        percents[index] = eventPercent;

        if (index + 1 == percents.length) {
          percents[0] = nextPercent;
        } else {
          percents[index + 1] = nextPercent;
        }
      }
    }

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
      <section class="body-container move-up">
        <p>
          <h2>{this.props.title}</h2>${this.props.currMoney}
        </p>
        {categoriesArray}
        <div class="add-remove">
          <button onClick={this.addCategory}>+</button>
          <button onClick={this.removeCategory}>-</button>
        </div>
      </section>
    );
  }
}

export default BodySection;
