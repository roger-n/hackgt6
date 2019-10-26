import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

class OptionsView extends Component {
  navigate = () => {};

  render() {
    return (
      <View>
        <Text>Options</Text>
        <TouchableOpacity onPress={this.navigate}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

OptionsView.propTypes = {};

export default OptionsView;
