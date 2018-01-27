const React = require('react');

const About = () => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                This is a weather application built on React.
            </p>
            <p>
                Here are some tools I used:
            </p>
            <ul>
                <li>
                    <a href="https://reactjs.org/">React</a>
                </li>
                <li>
                    <a href="https://openweathermap.org/">Open Weather Map</a>
                </li>
            </ul>
        </div>
    );
}

module.exports = About;
