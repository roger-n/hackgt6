import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ListView
} from "react-native";
import PropTypes from "prop-types";
import { TabView, SceneMap } from "react-native-tab-view";

import {
  getCoffeeAroundLocation,
  getSortedShopsByExtraTravelTime,
  getFinalTravelTimes,
  getWaitTime
} from "../../actions/logic";

import NormalList from "../../components/options/NormalList";

const BadList = () => <View style={{ backgroundColor: "#673ab7" }} />;

const TerribleList = () => <View style={{ backgroundColor: "#673ab7" }} />;

export class OptionsView extends React.Component {
  state = {
    data: {},
    details: {},
    geolocation: {},
    key: "",
    results: [],
    sortedResults: [],
    index: 0,
    routes: [
      { key: "first", title: "I like my job" },
      { key: "second", title: "I dislike my job" },
      { key: "third", title: "I wanna quit" }
    ]
  };
  constructor(props) {
    super(props);
  }

  setSortedResults = res => {
    this.setState({ sortedResults: res });
  };

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
    console.log(JSON.stringify(this.state.geolocation) + "\n\n");
    await getSortedShopsByExtraTravelTime(
      this.state.details.geometry.location,
      this.state.geolocation,
      this.state.key,
      this.state.token
    ).then(results => {
      this.setSortedResults(results);
      this.setState({ sortedResults: results });
      console.log(this.state.results + "helllllllloooooooo");
      for (let i = 0; i < results.length; i++) {
        console.log(this.state.sortedResults[i]);
        console.log(JSON.stringify(this.state.sortedResults[i]));
      }
    });
    console.log("\n\n\n\n");
    await getWaitTime("ChIJjTu-9GYE9YgRLuE7sCZXJGM").then(res =>
      console.log(res)
    );
  }

  render() {
    return this.state.sortedResults.length == 0 ? (
      <View />
    ) : (
      <TabView
        style={{ backgroundColor: "#853721" }}
        navigationState={this.state}
        renderScene={({ route, jumpTo }) => {
          switch (route.key) {
            case "first":
              return <NormalList data={this.state.sortedResults} />;
            case "second":
              return <BadList />;
            case "third":
              return <TerribleList />;
          }
        }}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
        swipeEnabled={true}
      />
    );
  }
}

export default OptionsView;
