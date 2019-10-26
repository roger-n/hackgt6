import React, { Component } from "react";
import { View, Text } from "react-native";
import HomeView from "./HomeView";
import { connect } from "react-redux";
import { requestLocationPermission } from "../../actions/permissions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GooglePlacesInput } from "../../components/GooglePlacesInput";
import { navigateToOptions } from "../../actions/navigationActions";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};

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
    return (
      <View>
        <GooglePlacesInput onSelect={() => navigateToOptions()} />
      </View>
    );
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
