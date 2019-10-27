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
      "HBvqn4baTq8WzTP7T0L3aTk8dH5d90t5ZDlAbBNkqAGU0ASPsVGYDEcpflQR_d9HoAjnd29I5jjF0zIir5Njigg4Rkq_prPNq0YdfAi4QjcbtfgdwFh7gjRuTpHItDELWnBg-AekasN3FM4gq0cbf0A4QBQyusj7MSn9Kgl1N-tLMNqCRMLDbMyauKRiWoAAhCmth-zM15TBQdIbNDp20iA6s33q8Alpi4QNaxAcxnU."
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
