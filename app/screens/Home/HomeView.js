import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ListView } from "react-native";
import styles from "./styles";

import Row from "./Row";

class HomeView extends Component {
  constructor(props) {
    super(props);
    const coffee = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: coffee.cloneWithRows(["row 1", "row 2"])
    };
  }

  state = {
    finisher: "I ________ My Job"
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{this.state.finisher}</Text>
          <View style={styles2.buttonRow}>
            <Button
              title="Love"
              onPress={() => {
                this.setState({ finisher: "I Love My Job" });
              }}
            />
            <Button
              title="Hate"
              onPress={() => {
                this.setState({ finisher: "I Hate My Job" });
              }}
            />
            <Button
              title="Got Fired From"
              onPress={() => {
                this.setState({ finisher: "I Got Fired From My Job" });
              }}
            />
          </View>
        </View>
        <ListView
          style={styles2.container2}
          dataSource={this.state.dataSource}
          renderRow={data => <Row {...data} />}
        />
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    textAlign: "center",
    height: 25,
    width: 200,
    backgroundColor: "#853721"
  },
  container2: {
    flex: 1,
    marginTop: 20
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#8E8E8E"
  }
});
export default HomeView;
