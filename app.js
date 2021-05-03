const apiKey = '87557ca63a853f6e5cb1c30813e124fc';
const unit = 'metric'
const form = document.querySelector('#weather-form');
const placeholder = document.querySelector('#weather-result')
const input = document.querySelector("input");
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// img url https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png

function getTheWeather(localcity){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${localcity}&appid=${apiKey}&units=metric`;

  return fetch(url).then(response => response.json());
  
}


form.addEventListener("submit", async e => {
    e.preventDefault();
  const result = await getTheWeather(input.value);
  console.log(result);
  const template = `
  
  <div class="card">
  <h2>${result.name}, ${result.sys.country}</h2>
  
  <p><img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png"></p>

  <b>Temperature: ${result.main.temp}<sup>°C</sup></b><br />
  <b>Max Temperature: ${result.main.temp_max}<sup>°C</sup></b><br />
  <b>Min Temperature: ${result.main.temp_min}<sup>°C</sup></b><br />
  <p><b>Humidity: ${result.main.humidity}</b></p>

</div>
  `
  placeholder.innerHTML = template;
  
})
    
