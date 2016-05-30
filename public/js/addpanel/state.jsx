var React = require('react');

var State = React.createClass({
  render: function() {
    var stateOptions = this.props.states.map(toOption);

    return (   
    <div className="pure-u-5-24 state">
        <label>Статус</label>
        <select className="pure-u-23-24" 
                onChange={this.props.onStateChange}
                value={this.props.value}>
                <option value="...">...</option>
            {stateOptions}
        </select>
    </div>);

    function toOption(state){
            return (<option value={state}>{state}</option>);
        }
  }
});

module.exports = State;