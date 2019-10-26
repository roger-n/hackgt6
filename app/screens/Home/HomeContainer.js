import React, { Component } from "react";
import HomeView from "./HomeView";
import { connect } from "react-redux";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeView {...this.props} />;
  }
}

export default HomeContainer;
