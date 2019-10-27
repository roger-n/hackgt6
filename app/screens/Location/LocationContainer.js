import React, { Component } from "react";
import { View, Text } from "react-native";
import { requestLocationPermission } from "../../actions/permissions";
import { GooglePlacesInput } from "../../components/GooglePlacesInput";
import { navigateToOptions } from "../../actions/navigationActions";

class LocationContainer extends Component {
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

export default LocationContainer;
