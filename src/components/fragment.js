import React, { Component } from "react";
import Column from "./column";

class fragment extends Component {
  render() {
    return (
      <React.Fragment>
        <table>
          <Column />
        </table>
      </React.Fragment>
    );
  }
}

export default fragment;
