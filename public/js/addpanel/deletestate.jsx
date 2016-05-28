var React = require('react');

var DeleteState = React.createClass({
    getInitialState: function() {
        return { 
            state: ""
        };
    },

    onDeleteState: function(e){
        var deleteState = this.state.state;
        if(deleteState === '')
            return;

        this.setState({state: '...'});
        this.props.onDeleteState(deleteState);
        e.preventDefault();        
    },

    onStateChange: function(e){
        this.setState({state:e.target.value})
    },

    render: function() {
        var stateOptions = this.props.states.map(toOption);

        return (
        <div className="pure-u-1-2 deleteState">
            <p>
                <select id="state" className="pure-u-23-24" 
                        onChange={this.onStateChange}>
                    {stateOptions}
                </select>
            </p>
            <button className="button-large pure-button"
                    onClick={this.onDeleteState}>Удалить</button>
        </div>);

        function toOption(state){
            return (<option value={state}>{state}</option>);
        }
  }
});

module.exports = DeleteState;