import React, { Component } from "react";
import setTheme from './SetTheme'

class ThemeSelector extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
    setTheme(event.target.value)
  }

  render() {
    return (
      <div onChange={this.onChangeValue}>
        <input type="radio" value="green" name="color" /> Green
        <input type="radio" value="blue" name="color" /> Blue
        <input type="radio" value="amber" name="color" /> Amber
        <input type="radio" value="contrast" name="color" /> Contrast
        <input type="radio" value="watermelon" name="color" /> Watermelon
      </div>
    );
  }
}

export default ThemeSelector;