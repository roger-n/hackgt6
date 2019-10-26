import { createStackNavigator, createAppContainer } from "react-navigation";

import Main from "app/screens/Main";
import Home from "app/screens/Home";

const RNApp = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Home: {
      screen: Home,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: "Main"
  }
);

export default createAppContainer(RNApp);
