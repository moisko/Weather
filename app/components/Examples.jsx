const React = require('react');
const {Link} = require('react-router');

const Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Sofia">Sofia, Bulgaria</Link>
                </li>
                <li>
                    <Link to="/?location=Paris">Paris, France</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;
