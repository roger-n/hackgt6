import MapView, { Polyline } from "react-native-maps";
import React, { Component } from "react";

export function MapRoute(data) {
  let coords = data.cordsPath;
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    >
      <Polyline
        coordinates={data.coordinates}
        strokeWidth={2}
        strokeColor="#FF0000"
      />
    </MapView>
  );
}
