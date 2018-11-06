import React from "react";

export default class Text extends React.Component {
    constructor(props) {
      super(props);
      this.color = props.color;
      this.value = props.value;
    }
    render() {
      return (
        <span style={{ color: this.color, margin: "10px" }}>{this.value}</span>
      );
    }
  }