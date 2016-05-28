var React = require('react');

var FromCity = require('./controlpanel/fromcity.jsx');
var ToCity = require('./controlpanel/tocity.jsx');
var State = require('./controlpanel/state.jsx');

var ControlPanel = React.createClass({
    getInitialState: function() {
        return { 
            isEdition: false
        };
    },

    switchMode: function(e){
        var isEdition = this.props.onSwitchMode();
        this.setState({isEdition: isEdition});
        e.preventDefault();
    },

    render: function() {
        return (
        <div className="controlPanel">
        <form className="pure-form">
        <fieldset>
            <legend><h1>Авиарейсы</h1></legend>
            <div classNameName="pure-g">

                <FromCity cities={this.props.cities}/>
                <ToCity cities={this.props.cities} />
                <State states={this.props.states} />
     
                <div className="pure-u-3-24">
                    <div className="counter">Авиорейсов: 001</div>
                </div>
                <div className="pure-u-3-24">
                    <button className="button-large pure-button" 
                            onClick={this.switchMode}>
                            { this.state.isEdition ? "Выйти из редактирования" : "Редактировать" }
                    </button>
                </div>
            </div>
        </fieldset>
        </form>
        </div>);
    }
});

module.exports = ControlPanel;