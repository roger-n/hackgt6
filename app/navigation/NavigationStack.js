import { createStackNavigator, createAppContainer } from "react-navigation";

import Options from "app/screens/Options";
import Location from "app/screens/Location";
import Main from "app/screens/Main";
import MapStuff from "app/screens/MapStuff";

const RNApp = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Options: {
      screen: Options,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Location: {
      screen: Location,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    MapStuff: {
      screen: MapStuff,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: "Main"
  }
);

export default createAppContainer(RNApp);
