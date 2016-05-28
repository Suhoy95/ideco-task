var React = require('react');

var DeleteState = React.createClass({
    render: function() {
        var cityOptions = this.props.states.map(toOption);

        return (
        <div className="pure-u-1-2 deleteState">
            <p>
                <select id="state" className="pure-u-23-24">
                    {cityOptions}
                </select>
            </p>
            <button className="button-large pure-button">Удалить</button>
        </div>);

        function toOption(state){
            return (<option value={state}>{state}</option>);
        }
  }
});

module.exports = DeleteState;