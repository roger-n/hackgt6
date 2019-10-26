import { PermissionsAndroid } from "react-native";

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "gimme ur gps",
        message: "need location" + "or ill commit suicide",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location");
      return true;
    } else {
      console.log("Location permission denied");
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
}
