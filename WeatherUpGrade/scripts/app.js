const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time  = document.querySelector("img.time");
const icon  = document.querySelector(".icon img");
const api = new getApi("682500PcukwQUtq1UDd6XimUfAmBA5HL", "http://dataservice.accuweather.com/locations/v1/cities/search", "http://dataservice.accuweather.com/currentconditions/v1/");


const updateUI = (data) =>{
    // const cityDets = data.cityDets;
    // const weather = data.weather;
    const {cityDets, weather} = data;


    console.log(data);

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value} &deg;C</span>
    </div>
    `;
    let iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    let timeSrc = null;
    if(weather.IsDayTime)
        timeSrc  = dayTime;
    else
        timeSrc  = nightTime;
    time.setAttribute('src', timeSrc);

    if(card.classList.contains("d-none"))
    {
        card.classList.remove("d-none");
    }
}

cityForm.addEventListener('submit', e =>{
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    api.updateCity(city)
    .then( data => {
        updateUI(data);
    })
    .catch( err => {  
        console.log (err);
    });
    localStorage.setItem("city", city)
});

if(localStorage.getItem("city"))
{
    api.updateCity(localStorage.getItem("city"))
    .then( data => {
        updateUI(data);
    })
    .catch( err => {  
        console.log (err);
    });
}