export function getKilometersBetweenCoordinates(coorsA, coorsB) {
  if (!coorsA.lat || !coorsA.lng || !coorsA.lat || !coorsB.lng) {
    console.log("invalid coords");
  }
  let coorsDist = Math.sqrt(
    Math.pow(coorsA.lat - coorsB.lat, 2) + Math.pow(coorsA.lng - coorsB.lng, 2)
  );
  console.log("distance: " + coorsDist);
  // 1 degree is 110km
  return coorsDist * 110;
}

// Google maps API
export async function getCoffeeWithinRadiusOfCoors(coors, radius, key) {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coors.lat},${coors.lng}&key=${key}&radius=${radius}&keyword=coffee`
  )
    .then(response => response.json())
    .then(responseJson => {
      //   console.log(JSON.stringify(responseJson));
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}

export async function getCoffeeAroundLocation(coors, geolocation, key) {
  const radius = getKilometersBetweenCoordinates(coors, {
    lat: geolocation.coords.latitude,
    lng: geolocation.coords.longitude
  });
  return await getCoffeeWithinRadiusOfCoors(coors, radius, key);
}
