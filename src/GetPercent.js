import React from "react";

class GetPercent extends React.Component {
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
        onChange={this.props.changePercent}
      />
    );
  }
}

export default GetPercent;
