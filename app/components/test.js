var React = require('react');
var test;
test = React.createClass({
    render: function () {
        return (
            <div className="test">
                just for test!
                    <p>if you see this,your webpack is already!</p>
            </div>
        );
    }
});

module.exports = test;