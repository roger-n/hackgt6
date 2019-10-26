export function getKilometersBetweenCoordinates(coorsA, coorsB) {
  if (
    !coorsA.latitude ||
    !coorsA.longitude ||
    !coorsA.latitude ||
    !coorsB.longitude
  ) {
    console.log("invalid coords");
  }
  let coorsDist = Math.sqrt(
    Math.pow(coorsA.latitude - coorsB.latitude, 2) +
      Math.pow(coorsA.longitude - coorsB.longitude, 2)
  );
  console.log("distance: " + coorsDist);
  // 1 degree is 110km
  return coorsDist * 110;
}

// Google maps API
export async function getCoffeeWithinRadiusOfCoors(coors, radius, key) {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coors.latitude},${coors.longitude}&key=${key}&radius=${radius}&keyword=coffee`
  )
    .then(response => response.json())
    .then(responseJson => {
      console.log(JSON.stringify(responseJson));
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}
