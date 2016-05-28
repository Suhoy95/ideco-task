var React = require('react');

var AddState = React.createClass({
    render: function() {
        return (
        <div className="pure-u-1-2 addState">
            <p>
                <input id="airline_number" type="text" className="pure-u-23-24" />
            </p>
            <button className="button-large pure-button">Создать</button>
        </div>);
  }
});

module.exports = AddState;