/*
 * Reducer actions related with navigation
 */
import NavigationService from "app/navigation/NavigationService";

export function navigateToOptions(props) {
  NavigationService.navigate("Options", props);
}

export function navigateToLocation(props) {
  NavigationService.navigate("Location", props);
}

export function navigateToMapStuff(props) {
  NavigationService.navigate("MapStuff", props);
}
