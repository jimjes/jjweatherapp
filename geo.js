function getPosition() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
   return new Promise((resolve, reject) => 
       navigator.geolocation.getCurrentPosition(resolve, reject)
   );
}

export async function geoSearch(apiKey){
    const location = await getPosition();
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiKey}`
    return await fetch(url).then(response => response.json());
}