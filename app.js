import { geoSearch } from './geo.js';
import { voiceSearch } from './speech.js';


const apiKey = '87557ca63a853f6e5cb1c30813e124fc';
const unit = 'metric'
const form = document.querySelector('#weather-form');
const placeholder = document.querySelector('#weather-result')
const input = document.querySelector("input");
const voiceButton = document.querySelector("#use-voice");
const locationButton = document.querySelector("#use-location");

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// img url https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png

function getTheWeather(localcity){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${localcity}&appid=${apiKey}&units=metric`;
  return fetch(url).then(response => response.json());
}

function paintCard(result) {
    const template = `
  <div class="card" id="grad1">
  
  <p><img class="imgsha" src="https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png"></p>
  
  <h2>${result.name}, ${result.sys.country}</h2>
  <p><b>Temperature: ${result.main.temp}<sup>°C</sup></b><p>
  <hr />
  <p>Max Temperature: ${result.main.temp_max}<sup>°C</sup></b><br />
  
  Min Temperature: ${result.main.temp_min}<sup>°C</sup></b><br />
  
  Humidity: ${result.main.humidity}</p>

  </div>
  `
  placeholder.innerHTML = template;
}

form.addEventListener("submit", async e => {
    e.preventDefault();
  
  const result = await getTheWeather(input.value);
  console.log(result);
  paintCard(result);
});
    
voiceButton.addEventListener("click", async eventVoice => {
     eventVoice.preventDefault();
  console.log('Voice button activated!'); 
  voiceSearch(async function(voice){
      const cityName = voice.results[0][0].transcript;
      const result = await getTheWeather(cityName);
      paintCard(result);
  });

});

locationButton.addEventListener("click", async eventlocation => {
  eventlocation.preventDefault();
   console.log('Location button activated!');
  const result = await geoSearch(apiKey);
  paintCard(result);
});