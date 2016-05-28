var React = require('react');

var State = React.createClass({
  render: function() {
    var stateOptions = this.props.states.map(toOption);

    return (   
    <div className="pure-u-5-24 state">
        <label for="state">Статус</label>
        <select id="state" className="pure-input-1-2">
            {stateOptions}
        </select>
    </div>);

    function toOption(state){
            return (<option value={state}>{state}</option>);
        }
  }
});

module.exports = State;