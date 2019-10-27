import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ListView
} from "react-native";
import { navigateToMapStuff } from "../../actions/navigationActions";

export default class NormalList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: this.props.data
  };

  render() {
    console.log(this.state.data.length);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const dataSource = ds.cloneWithRows(this.state.data);
    return (
      <View
        style={{
          padding: 8
        }}
      >
        <ListView
          dataSource={dataSource}
          renderRow={rowData => (
            <TouchableOpacity
              style={{
                padding: 8,
                backgroundColor: "white",
                borderBottomWidth: 5,
                borderColor: "#853721"
              }}
              onPress={data => {
                navigateToMapStuff(data);
              }}
            >
              <Text style={{ color: "black", fontSize: 20 }}>
                {rowData.name}
              </Text>
              <Text style={{ color: "black" }}>
                {`Additional Time: +${Math.round(rowData.extraTime)} mins`}
              </Text>
              <Text style={{ color: "black" }}>
                {`Total Time: ${Math.round(rowData.totalTime)} mins`}
              </Text>
              <Text style={{ color: "#003366", fontWeight: "bold" }}>
                {rowData.vicinity}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
