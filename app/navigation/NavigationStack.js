import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "app/screens/Login";
import Home from "app/screens/Home";
import Options from "app/screens/Options";
import Location from "app/screens/Location";

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Home: {
      screen: Home,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Options: {
      screen: Options,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Location: {
      screen: Location,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(RNApp);
