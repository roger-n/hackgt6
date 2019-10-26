import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { getCoffeeWithinRadiusOfCoors } from "../../actions/logic";

export class OptionsView extends React.Component {
  state = {
    data: {},
    details: {},
    geolocation: {}
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
      geolocation: this.props.data.navigation.state.params.geolocation
    });
  }

  async componentDidMount() {
    console.log("data at view: ");
    console.log(JSON.stringify(this.state.data));
    console.log(JSON.stringify(this.state.details));
    console.log(JSON.stringify(this.state.details.geometry.location));
    console.log(JSON.stringify(this.state.geolocation));
    await getCoffeeWithinRadiusOfCoors(
      this.state.details.geometry.location,
      20000,
      "AIzaSyD05_UZtGyhAhq-bhVxsAJ4gLRw1xCd8KY"
    ).then(res => console.log("REEEE" + JSON.stringify(res)));
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
