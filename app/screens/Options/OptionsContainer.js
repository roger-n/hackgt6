import React, { Component } from "react";
import OptionsView from "./OptionsView";
import { connect } from "react-redux";

class OptionsContainer extends Component {
  constructor(props) {
    super(props.navigation.state.params);
    console.log("props");
    console.log(JSON.stringify(this.props));
  }

  render() {
    return <OptionsView data={this.props} />;
  }
}

export default OptionsContainer;
