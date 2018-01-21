const React = require('react');

const WeatherMessage = ({location, temp}) => {
    return (
        <h3>It is {temp} in {location}.</h3>
    );
}

module.exports = WeatherMessage;
