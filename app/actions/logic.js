export function getKilometersBetweenCoordinates(coorsA, coorsB) {
  if (!coorsA.lat || !coorsA.lng || !coorsA.lat || !coorsB.lng) {
    console.log("invalid coords");
  }
  let coorsDist = Math.sqrt(
    Math.pow(coorsA.lat - coorsB.lat, 2) + Math.pow(coorsA.lng - coorsB.lng, 2)
  );
  console.log("distance: " + coorsDist * 110);
  // 1 degree is 110km
  return coorsDist * 110;
}

// Google maps API, radius arg is in km, api uses m
export async function getCoffeeWithinRadiusOfCoors(coors, radius, key) {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
      coors.lat
    },${coors.lng}&key=${key}&radius=${radius * 1000}&keyword=coffee`
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

// Get all coffee spots within radius of distance
export async function getCoffeeAroundLocation(coors, geolocation, key) {
  const radius = getKilometersBetweenCoordinates(coors, {
    lat: geolocation.coords.latitude,
    lng: geolocation.coords.longitude
  });
  return await getCoffeeWithinRadiusOfCoors(coors, radius, key);
}

// export async function get(coors, geolocation, key) {}

export async function getFinalTravelTimes(coors, geolocation, key, token) {
  let baseTime = 0;
  await fetch(
    `https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World/solve?stops=${geolocation.coords.longitude},${geolocation.coords.latitude};${coors.lng},${coors.lat}&token=${token}&f=json`
  )
    .then(response => response.json())
    .then(responseJson => {
      baseTime = responseJson.directions[0].summary.totalTime;
      console.log("base time: " + baseTime);
    })
    .catch(error => {
      console.error(error);
    });
  return await getCoffeeAroundLocation(coors, geolocation, key).then(
    async res => {
      const results = res.results;
      return await Promise.all(
        results.map(async element => {
          return await fetch(
            `https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World/solve?stops=${geolocation.coords.longitude},${geolocation.coords.latitude};${element.geometry.location.lng},${element.geometry.location.lat};${coors.lng},${coors.lat}&token=${token}&f=json`
          )
            .then(response => response.json())
            .then(responseJson => {
              console.log("location: " + element.name + " " + element.vicinity);
              element.totalTime = responseJson.directions[0].summary.totalTime;
              element.extraTime = element.totalTime - baseTime;
              console.log("total time: " + element.totalTime);
              console.log("extra time: " + element.extraTime);
              return element;
            })
            .catch(error => {
              console.error(error);
            });
        })
      );
    }
  );
}

export async function getWaitTime(place_id) {
  return await fetch(
    "https://us-central1-hackgt6-257106.cloudfunctions.net/getWaitTime/",
    {
      method: "POST",
      body: JSON.stringify({ place_id: place_id })
    }
  );
}

export async function getSortedShopsByExtraTravelTime(
  coors,
  geolocation,
  key,
  token
) {
  return await getFinalTravelTimes(coors, geolocation, key, token).then(
    results => {
      console.log(results);
      results.sort((a, b) => (a.extraTime > b.extraTime ? 1 : -1));
      for (let i = 0; i < results.length; i++) {
        console.log(JSON.stringify("results " + JSON.stringify(results[i])));
      }
      return results;
    }
  );
}

// export async function getSortedByWorstTravelTime {

// }
