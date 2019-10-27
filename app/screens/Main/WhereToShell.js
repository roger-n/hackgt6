import * as React from "react";
import { Text, View, StyleSheet, Button, Alert, Image } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import { navigateToLocation } from "../../actions/navigationActions";

const coffee = ["Starbucks", "Dunkin Donuts", "Carribou", "Gus's Best"];
export default class WhereToShell extends React.Component {
  state = { selectedcoffee: [] };

  onSelectionsChange = selectedCoffee => {
    this.setState({ selectedCoffee });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bean.io</Text>
        <View style={{ marginBottom: 20 }}>
          <View style={{ height: 40, backgroundColor: "#A9A9A9" }}>
            <Text style={styles.paragraph}>Preferred Shops:</Text>
          </View>
          <SelectMultiple
            items={coffee}
            selectedItems={this.state.selectedCoffee}
            onSelectionsChange={this.onSelectionsChange}
          />
        </View>
        <View
          width={160}
          style={{
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            title="Destination?"
            onPress={() => {
              navigateToLocation();
            }}
            style={{ alignSelf: "center", marginBottom: 20 }}
          />
        </View>
        <Image style={styles.logo} source={require("./coffee.png")} />
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
    margin: 5,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  logo: {
    height: 128,
    width: 156
  }
});
