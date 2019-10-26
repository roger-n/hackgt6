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

  state = {
    geolocation: {},
    key: "AIzaSyD05_UZtGyhAhq-bhVxsAJ4gLRw1xCd8KY",
    token:
      "V3fGHROe6dgDcrCjNxyhyj0rXfsFMOBUq_e_FEhC5grIHWozn_HO7Fxm4WEWuA38nOoldEfhrl-FkJL0J0nECTSmqYg4aCrymuBX-DK3aGXvLirYKa6ZaVJVoX3hlKDXv-DbMp1hvc6KavieuG7sxDWkgdUPQ56KWUQeZaY6l0N_G8Bwiy_lxk_ujyslm00zGo8I0iAV4Ry9QtEA6UiyrKcnZoMc0fp3wTOC-NmsDKk."
  };

  async componentWillMount() {
    const hasLocationPosition = await requestLocationPermission();
    navigator.geolocation.getCurrentPosition(
      res => {
        console.log(res);
        console.log("here");
        this.setState({ geolocation: res });
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <View>
        <GooglePlacesInput
          onSelect={({ data, details }) =>
            navigateToOptions({
              data,
              details,
              geolocation: this.state.geolocation,
              key: this.state.key,
              token: this.state.token
            })
          }
        />
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
