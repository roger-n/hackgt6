/*
 * Reducer actions related with navigation
 */
import NavigationService from "app/navigation/NavigationService";

export function navigateToHome(params) {
  NavigationService.navigate("Home", params);
}

export function navigateToOptions(props) {
  NavigationService.navigate("Options", props);
}
