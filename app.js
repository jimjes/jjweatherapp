const apiKey = '87557ca63a853f6e5cb1c30813e124fc';
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
  <h2>${result.name}</h2>
  <b>Temperature: ${result.main.temp}</b>
  <b>Max Temperature: ${result.main.temp_max}</b>
  <b>Min Temperature: ${result.main.temp_min}</b>
  <b>Humidity: ${result.main.humidity}</b>
  <img src="https://openweathermap.org/img/wn/${result.weather[02d].icon}@4x.png"> `
  
  placeholder.innerHTML = template;
  
})
    
