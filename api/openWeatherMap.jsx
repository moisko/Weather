const axios = require('axios');

const APP_ID = 'e74e902e63bac50f09740ed6eee57009';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';

module.exports = {
    getTemp: function (location) {
        const encodedLocation = encodeURIComponent(location);
        const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&appid=${APP_ID}&units=imperial`;

        return axios.get(requestUrl).then(
            function (response) {
                if (response.status === 200) {
                    return response.data.main.temp;
                } else {
                    throw new Error(response.data.message);
                }
            },
            function (response) {
                throw new Error(`No weather info found for location ${location}. Server responded with: ${response.message}`);
            }
        );
    }
}
