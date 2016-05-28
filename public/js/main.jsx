var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var ControlPanel = require('./controlpanel.jsx');
var AirlineTable = require('./airlinetable.jsx');
var AddPanel = require('./addpanel.jsx');

var AirlineApplication = React.createClass({
    getInitialState: function() {
        return { 
            isEdition: true,
            airlines: [],
            cities: [],
            states: []
        };
    },

    componentDidMount: function() {
        this.loadCities();
        this.loadStates();
    },

    addAirline: function(airline){
        var self = this;    
        $.post('/api/airline', {airline: airline})
         .success(function(data){
            self.setState({airlines: data});
         })
         .error(function(err){
            console.log(err);
         });
    },

    loadCities: function(){
        var self = this;
        $.get('/api/city')
         .success(function(data){
            self.setState({cities: data});
         })
         .error(function(err){
            console.log(err);
         });
    },
    addCity: function(city){
        if(city === '...')
            return;

        var self = this;    
        $.post('/api/city', {city: city})
         .success(function(data){
            self.setState({cities: data});
         })
         .error(function(err){
            console.log(err);
         });
    },
    deleteCity: function(city){
        if(city === '...')
            return;

        var self = this;   
        $.ajax({
            type: "DELETE",
            url: '/api/city',
            data: {city:city},
            success: function(data){
                self.setState({cities: data});
            },
            error: function(xhr, status, err){
              console.log(err);
            }
        });
    },

    loadStates: function(){
        var self = this;
        $.get('/api/state')
         .success(function(data){
            self.setState({states: data});
         })
         .error(function(err){
            console.log(err);
         });
    },
    addState: function(state){
        if(state === '...')
            return;

        var self = this;
        $.post('/api/state', {state: state})
         .success(function(data){
            self.setState({states: data});
         })
         .error(function(err){
            console.log(err);
         });
    },
    deleteState: function(state){
        if(state === '...')
            return;

        var self = this;   
        $.ajax({
            type: "DELETE",
            url: '/api/state',
            data: {state:state},
            success: function(data){
                self.setState({states: data});
            },
            error: function(xhr, status, err){
              console.log(err);
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
            <ControlPanel onSwitchMode={this.switchMode}
                          cities={this.state.cities}
                          states={this.state.states}/>
            <AirlineTable />

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