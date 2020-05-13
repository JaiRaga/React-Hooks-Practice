import React, { Component } from "react";

class Effect extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1
            }))
          }>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default Effect;
