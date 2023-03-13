const dayTime = "./img/day.svg";
const nightTime = "./img/night.svg";

class getApi{
    constructor(key, baseCityURI, baseWeatherURI)
    {
        this.key = key;
        this.baseCityURI = baseCityURI;
        this.baseWeatherURI = baseWeatherURI;
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {cityDets,weather};
    }
    async getCity(nameCity){
        const query = `?apikey=${this.key}&q=${nameCity}`
    
        const response = await fetch(this.baseCityURI + query)
        const data = await response.json();
        return data[0];
    }
    async getWeather(cityKey){
        const query = `${cityKey}?apikey=${this.key}`
    
        const response = await fetch(this.baseWeatherURI + query)
        const data = await response.json();
        return data[0]
    }
}

// const mykey = "682500PcukwQUtq1UDd6XimUfAmBA5HL";
// const mykey = "QABkXxBI5iBKBxODc3kDHGNAzbrjnRNt";


// const getWeather = async(cityKey)  => {
//     const base ="http://dataservice.accuweather.com/currentconditions/v1/";
//     const query = `${cityKey}?apikey=${mykey}`

//     const response = await fetch(base + query)
//     const data = await response.json();
//     return data[0];
// }

// const getCity = async(nameCity)  => {
//     const base ="http://dataservice.accuweather.com/locations/v1/cities/search";
//     const query = `?apikey=${mykey}&q=${nameCity}`

//     const response = await fetch(base + query)
//     const data = await response.json();
//     return data[0];
// }
