import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import {
  getCoffeeAroundLocation,
  getFinalTravelTimes
} from "../../actions/logic";

export class OptionsView extends React.Component {
  state = {
    data: {},
    details: {},
    geolocation: {},
    key: ""
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("my props");
    console.log(this.props);
    this.setState({
      data: this.props.data.navigation.state.params.data,
      details: this.props.data.navigation.state.params.details,
      geolocation: this.props.data.navigation.state.params.geolocation,
      key: this.props.data.navigation.state.params.key,
      token: this.props.data.navigation.state.params.token
    });
  }

  async componentDidMount() {
    console.log("data at view: ");
    console.log(JSON.stringify(this.state.data));
    console.log(JSON.stringify(this.state.details));
    console.log(JSON.stringify(this.state.details.geometry.location));
    console.log(JSON.stringify(this.state.geolocation));
    await getCoffeeAroundLocation(
      this.state.details.geometry.location,
      this.state.geolocation,
      this.state.key
    ).then(res => {
      console.log(JSON.stringify(res));
    });
    await getFinalTravelTimes(
      this.state.details.geometry.location,
      this.state.geolocation,
      this.state.key,
      this.state.token
    );
  }

  render() {
    return (
      <View>
        <Text>Options</Text>
      </View>
    );
  }
}

export default OptionsView;
