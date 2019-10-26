import * as React from "react";
import { Text, View, StyleSheet, Button, Alert, Image } from "react-native";
import SelectMultiple from "react-native-select-multiple";

const fruits = ["Starbucks", "Dunkin Donuts", "Carribou", "Gus's Best"];
export default class whereToShell extends React.Component {
  state = { selectedFruits: [] };

  onSelectionsChange = selectedFruits => {
    this.setState({ selectedFruits });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bean.io</Text>
        <Text style={styles.paragraph}>Favorite Shops?</Text>
        <SelectMultiple
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange}
        />
        <Image style={styles.logo} source={require("coffee.png")} />
        <Button
          title="Where's work?..."
          onPress={() => {
            Alert.alert("Simple Button pressed");
            this.setState({ color: "#000000" });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#853721",
    padding: 8
  },
  title: {
    margin: 24,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  logo: {
    height: 128,
    width: 128
  }
});
