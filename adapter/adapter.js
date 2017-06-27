// The first version of weather service
class WeatherServiceV1 {
    getWeather() {
        return {
            temp: 15,
            weather: "sunny"
        };
    }
}
// Second version of weather service
class WeatherServiceV2 {
    getTemp() {
        return 13;
    }
    getWeather() {
        return "rain";
    }
}
// Code output data
class WeatherWidget {
    displayWeather(weatherService) {
        let weather = weatherService.getWeather();

        document.getElementById("temp").innerHTML = weather.temp;
        document.getElementById("weather").innerHTML = weather.weather;
    }
}

// Work with first service
let serviceV1 = new WeatherServiceV1();
let widget = new WeatherWidget();

widget.displayWeather(serviceV1);

// The Adapter for second version of weather service
class WeatherServiceV2_Adapter {
    constructor() {
        this.service = new WeatherServiceV2();
        return {
            getWeather: () => {
                return {
                    temp: this.service.getTemp(),
                    weather: this.service.getWeather()
                };
            }
        };
    }
}

// Work with second service
let serviceV2_adapter = new WeatherServiceV2_Adapter();
let widget = new WeatherWidget();

widget.displayWeather(serviceV2_adapter);