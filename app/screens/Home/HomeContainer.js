import React, { Component } from "react";
import HomeView from "./HomeView";
import { connect } from "react-redux";
import { requestLocationPermission } from "../../actions/permissions";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    const hasLocationPosition = await requestLocationPermission();
    navigator.geolocation.getCurrentPosition(
      res => {
        console.log(res);
        console.log("here");
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    return <HomeView {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
