import React from "react";
import { View, Image, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};

export const GooglePlacesInput = ({ onSelect }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2} // minimum length of text to search
      autoFocus={true}
      returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed="auto" // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        onSelect({ data, details });
      }}
      getDefaultValue={() => ""}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: "AIzaSyD05_UZtGyhAhq-bhVxsAJ4gLRw1xCd8KY",
        language: "en" // language of the results
        // types: "address" // default: 'geocode'
      }}
      styles={{
        textInputContainer: {
          width: "100%"
        },
        description: {
          fontWeight: "bold"
        },
        predefinedPlacesDescription: {
          color: "#1faadb"
        },
        listView: {
          paddingTop: 40,
          position: "absolute"
        }
      }}
      currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
      // currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={
        {
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }
      }
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: "distance",
        types: "food"
      }}
      filterReverseGeocodingByTypes={[
        "locality",
        "administrative_area_level_3"
      ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[workPlace]}
      //   debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.

      //   renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  );
};
