var React = require('react');

var State = React.createClass({
    onChange: function(e){
        var state = e.target.value === '...' ? null : e.target.value;
        this.props.onChange(state);
    },

    render: function() {
        var stateOptions = this.props.states.map(toOption);

        return (   
        <div className="pure-u-5-24 state">
            <label>Статус</label>
            <select className="pure-input-1-2" onChange={this.onChange}>
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