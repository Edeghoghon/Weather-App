searchButton = document.querySelector("fa-magnifying-glass ");
theCity = document.querySelector(".city");
cityTemp= document.querySelector(".temp");
cityHumidity = document.querySelector(".humidity");
cityWind = document.querySelector(".Wind");
searchButton = document.querySelector("#search");
const image = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather")
const error = document.querySelector(".error")



 searchButton.addEventListener('click' ,  async ()=> {
    const apiKey = "c3a7f08778e29d267426a7ce8369dd5c";
     const city = document.querySelector('#searchInput').value;

     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);

     if(response.status == 404){
        error.style.display = "block"
        weather.style.display = "none"

     }else{
        var data = await response.json();
        theCity.innerHTML = data.name;
        cityTemp.innerHTML = Math.round(data.main.temp) + "°C";
        cityHumidity.innerHTML = data.main.humidity +"%";
        cityWind.innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            image.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            image.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            image.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            image.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            image.src = "images/mist.png"
        }
        weather.style.display = "block"
        error.style.display = "none"
    
    
         console.log(data);
     }
     
     
     })
     

     




async function checkWeather () {
    const apiKey = "c3a7f08778e29d267426a7ce8369dd5c";
    const city = document.querySelector('#searchInput').value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    theCity.innerHTML = data.name;
    cityTemp.innerHTML = data.main.temp ;
    cityHumidity.innerHTML = data.main.humidity;
    cityWind.innerHTML = data.wind.speed;


}
//checkWeather();
