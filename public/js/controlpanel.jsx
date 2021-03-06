var React = require('react');

var FromCity = require('./controlpanel/fromcity.jsx');
var ToCity = require('./controlpanel/tocity.jsx');
var State = require('./controlpanel/state.jsx');

var ControlPanel = React.createClass({
    getInitialState: function() {
        this.controlFilters = {
            fromCity: null,
            toCity: null,
            state: null
        };
        return {};
    },

    switchMode: function(e){
        var isEdition = this.props.onSwitchMode();
        e.preventDefault();
    },

    chageFilters: function(){
        this.props.onFiltersChange(this.controlFilters);
    },

    onFromCityChange: function(fromCity){
        this.controlFilters.fromCity = fromCity;
        this.chageFilters();
    },
    onToCityChange: function(toCity){
        this.controlFilters.toCity = toCity;
        this.chageFilters();
    },
    onStateChange: function(state){
        this.controlFilters.state = state;
        this.chageFilters();
    },

    render: function() {
        return (
        <div className="controlPanel">
        <form className="pure-form">
        <fieldset>
            <legend><h1>Авиарейсы</h1></legend>
            <div className="pure-g">

                <FromCity cities={this.props.cities} onChange={this.onFromCityChange} />
                <ToCity cities={this.props.cities} onChange={this.onToCityChange} />
                <State states={this.props.states} onChange={this.onStateChange} />
     
                <div className="pure-u-3-24">
                    <div className="counter">Авиарейсов: {this.props.amountAirlines}</div>
                </div>
                <div className="pure-u-3-24">
                    <button className="pure-button" 
                            onClick={this.switchMode}>
                            { this.props.isEdition ? "Выйти из редактирования" : "Редактировать" }
                    </button>
                </div>
            </div>
        </fieldset>
        </form>
        </div>);
    }
});

module.exports = ControlPanel;