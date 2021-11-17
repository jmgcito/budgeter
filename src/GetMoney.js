import React from "react";

class GetMoney extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        class="input-field"
        type="number"
        value={this.props.currMoney}
        onChange={this.props.changeMoney}
      />
    );
  }
}
export default GetMoney;
