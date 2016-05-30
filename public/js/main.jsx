var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');

var ControlPanel = require('./controlpanel.jsx');
var AirlineTable = require('./airlinetable.jsx');
var AddPanel = require('./addpanel.jsx');

var AirlineApplication = React.createClass({
    getInitialState: function() {
        return { 
            isEdition: false,
            amountAirlines: 0,
            airlines: [],
            cities: [],
            states: []
        };
    },

    componentDidMount: function() {
        this.loadCities();
        this.loadStates();
        this.loadAirlines();
        this.loadAmountAirlines();
    },

    loadAmountAirlines: function(){
        var self = this;
        $.get('/api/airline/amount')
         .success(function(data){
            self.setState({amountAirlines: data.amount});
         });
    },

    loadAirlines: function(filters){
        var self = this;
        $.get('/api/airline', filters)
         .success(function(data){
            self.setState({isEdition: false});
            self.setState({airlines: data});
         });
    },
    addAirline: function(airline){
        var self = this;    
        $.post('/api/airline', {airline: airline})
         .success(function(data){
            self.setState({airlines: data});
            self.loadAmountAirlines();
         });
    },
    saveAirline: function(airline){
        var self = this;   
        $.ajax({
            type: "PUT",
            url: '/api/airline',
            data: {airline: airline}
        });
    },
    deleteAirline: function(id){
        var self = this;   
        $.ajax({
            type: "DELETE",
            url: '/api/airline',
            data: {id: id},
            success: function(data){
                var newAirlines = _.filter(this.state.airlines, function(airline){
                                                                    return airline.id != id;
                                                                });
                self.setState({airlines: newAirlines});
            }
        });
    },

    loadCities: function(){
        var self = this;
        $.get('/api/city')
         .success(function(data){
            self.setState({cities: data});
         });
    },
    addCity: function(city){
        var self = this;    
        $.post('/api/city', {city: city})
         .success(function(data){
            self.setState({cities: data});
         });
    },
    deleteCity: function(city){
        var self = this;   
        $.ajax({
            type: "DELETE",
            url: '/api/city',
            data: {city:city},
            success: function(data){
                self.setState({cities: data});
            }
        });
    },

    loadStates: function(){
        var self = this;
        $.get('/api/state')
         .success(function(data){
            self.setState({states: data});
         });
    },
    addState: function(state){
        var self = this;
        $.post('/api/state', {state: state})
         .success(function(data){
            self.setState({states: data});
         });
    },
    deleteState: function(state){
        var self = this;   
        $.ajax({
            type: "DELETE",
            url: '/api/state',
            data: {state:state},
            success: function(data){
                self.setState({states: data});
            }
        });
    },

    switchMode: function(){
        var isEdition = !this.state.isEdition;
        this.setState({isEdition: isEdition});
        return isEdition;
    },

    render: function() {
        return (
        <div className="AirlineApplication">
            <ControlPanel onFiltersChange={this.loadAirlines}
                          onSwitchMode={this.switchMode}
                          cities={this.state.cities}
                          states={this.state.states} 
                          amountAirlines={this.state.amountAirlines}
                          isEdition={this.state.isEdition}/>
            
            <AirlineTable isEditionTable={this.state.isEdition}
                          onSaveAirline={this.saveAirline}
                          onDeleteAirline={this.deleteAirline}
                          airlines={this.state.airlines}
                          cities={this.state.cities}
                          states={this.state.states} 
                          />

            {this.state.isEdition ? 
                <AddPanel onAddAirline={this.addAirline}

                          cities={this.state.cities}
                          onAddCity={this.addCity}
                          onDeleteCity={this.deleteCity}

                          states={this.state.states}
                          onAddState={this.addState}
                          onDeleteState={this.deleteState} 
                          /> 
                : null}
        </div>);
    }
});


ReactDOM.render(
    <AirlineApplication />,
    document.getElementById('airlineApplication')
);