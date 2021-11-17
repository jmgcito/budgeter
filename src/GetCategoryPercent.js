import React from "react";

class GetCategoryPercent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="number"
        class="input-field percent"
        min={0}
        max={100}
        value={this.props.percent}
        onChange={(event) =>
          this.props.updatePercent(event, this.props.index, this.props.percent)
        }
      />
    );
  }
}
export default GetCategoryPercent;
