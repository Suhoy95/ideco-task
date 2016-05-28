var React = require('react');

var AddState = React.createClass({
    getInitialState: function() {
        return { 
            state: ""
        };
    },

    onAddState: function(e){
        var newState = this.state.state;
        if(newState === '')
            return;

        this.props.onAddState(newState);
        this.setState({state: ''});
        e.preventDefault();        
    },

    onStateChange: function(e){
        this.setState({state:e.target.value})
    },
    render: function() {
        return (
        <div className="pure-u-1-2 addState">
            <p>
                <input id="airline_number" type="text" 
                       className="pure-u-23-24"
                       onChange={this.onStateChange}
                       value={this.state.state} />
            </p>
            <button className="button-large pure-button"
                    onClick={this.onAddState}>Создать</button>
        </div>);
  }
});

module.exports = AddState;