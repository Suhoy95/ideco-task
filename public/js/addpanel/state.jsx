var React = require('react');

var State = React.createClass({
  render: function() {
    var stateOptions = this.props.states.map(toOption);

    return (   
    <div className="pure-u-5-24 state">
        <label for="add_state">Статус</label>
        <select id="add_state" className="pure-u-23-24">
            {stateOptions}
        </select>
    </div>);

    function toOption(state){
            return (<option value={state}>{state}</option>);
        }
  }
});

module.exports = State;