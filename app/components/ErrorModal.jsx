const React = require('react');

const ErrorModal = React.createClass({
    componentDidMount: function () {
        const modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>Some title</h4>
                <p>Our error message</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;
