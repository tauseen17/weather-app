apikey="16b77c1cfcd7ef847c0b231fcdbe4d70"
apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search_input=document.querySelector(".search input");
const search_button=document.querySelector(".search button");
const weather_icon=document.querySelector(".weather-icon");
const enter_button=document.querySelector(".myInput");

async function checkweather(city){
    const response=await fetch(apiURL + city + `&appid=${apikey}`);
    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        
    }
    else{
        var data= await response.json();

     document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km";
    

    if(data.weather[0].main=="Clouds")
    {
        weather_icon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear")
    {
        weather_icon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        weather_icon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Haze")
    {
        weather_icon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        weather_icon.src="images/mist.png"
    }
    else if(data.weather[0].main=="Snow")
    {
        weather_icon.src="images/snow.png"
    }
    document.querySelector(".weather").style.display="block";

    document.querySelector(".error").style.display="none";
    }
    
    

    

}

//add event listner to search button and enter button

search_button.addEventListener("click",()=>{
    checkweather(search_input.value);
})


enter_button.addEventListener("keypress",function(event){
    if(event.key=="Enter")
    {
    checkweather(search_input.value);
    
    }
})