const location = "Vancouver,ca";
const api_key = "0c94772302afa69c840050fef6a6d295";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;