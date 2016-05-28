var React = require('react');

var FromCity = require('./fromcity.jsx');
var ToCity = require('./tocity.jsx');
var State = require('./state.jsx');

var initAirline = { 
        number: "",
        planeType: "",
        fromCity: "...",
        toCity: "...",
        startTime: "",
        endTime: "",
        state: "..."
    };

var AddAirline = React.createClass({
    getInitialState: function() {
        return Object.create(initAirline);
    },

    onAddAirline: function(e){
        var state = this.state;

        this.props.onAddAirline({
            number: state.number,
            planeType: state.planeType,
            fromCity: state.fromCity,
            toCity: state.toCity,
            startTime: state.startTime,
            endTime: state.endTime,
            state: state.state,
        });
        
        this.setState({ 
            number: "",
            planeType: "",
            fromCity: "...",
            toCity: "...",
            startTime: "",
            endTime: "",
            state: "..."
        }); 
        e.preventDefault();        
    },

    onNumperChange: function(e){
        this.setState({number:e.target.value})
    },

    onPlaneTypeChange: function(e){
        this.setState({planeType:e.target.value})
    },

    onFromCityChange: function(e){
        this.setState({fromCity:e.target.value})
    },

    onToCityChange: function(e){
        this.setState({toCity:e.target.value})
    },

    onStateChange: function(e){
        this.setState({state:e.target.value})
    },

    onStartTimeChange: function(e){
        this.setState({startTime:e.target.value})
    },

    onEndTimeChange: function(e){
        this.setState({endTime:e.target.value})
    },

    render: function() {
    return (
    <form className="pure-form pure-form-stacked">
        <fieldset>
            <legend>Создать</legend>

            <div className="pure-g">
                <div className="pure-u-5-24">
                    <label>Номер рейса:</label>
                    <input className="pure-u-23-24" type="text" 
                           onChange={this.onNumperChange}
                           value={this.state.number}/>
                </div>
                <div className="pure-u-6-24">
                    <label>Тип самолета:</label>
                    <input className="pure-u-23-24" type="text" 
                           onChange={this.onPlaneTypeChange}
                           value={this.state.planeType}/>
                </div>

                <FromCity cities={this.props.cities} 
                          onFromCityChange={this.onFromCityChange}
                          value={this.state.fromCity} />
                <ToCity cities={this.props.cities} 
                        onToCityChange={this.onToCityChange}
                        value={this.state.toCity} />
                <State states={this.props.states} 
                       onStateChange={this.onStateChange}
                       value={this.state.state} />

                <div className="pure-u-5-24">
                    <label>Время вылет:</label>
                    <input className="pure-u-23-24" type="text" 
                           onChange={this.onStartTimeChange}
                           value={this.state.startTime} />
                </div>
                <div className="pure-u-6-24">
                    <label>Время посадки:</label>
                    <input className="pure-u-23-24" type="text" 
                           onChange={this.onEndTimeChange}
                           value={this.state.endTime}/>
                </div>
                
                <div className="pure-u-3-24">
                    <br />
                    <button className="button-large pure-button" 
                            onClick={this.onAddAirline}>Создать</button>
                </div>
            </div>
        </fieldset>
    </form>);
    }
});

module.exports = AddAirline;