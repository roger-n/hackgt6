import React, { Component } from "react";
import OptionsView from "./OptionsView";
import { connect } from "react-redux";

class OptionsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <OptionsView {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    // onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsContainer);
