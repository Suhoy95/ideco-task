var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var ControlPanel = require('./controlpanel.jsx');
var AirlineTable = require('./airlinetable.jsx');
var AddPanel = require('./addpanel.jsx');

var AirlineApplication = React.createClass({
    getInitialState: function() {
        return { 
            isEdition: false,
            cities: [],
            states: []
        };
    },

    componentDidMount: function() {
        var self = this;
        $.get('/api/city')
         .success(function(data){
            console.log(data);
            self.setState({cities: data});
         })
         .error(function(err){
            console.log(err);
         });

         $.get('/api/state')
         .success(function(data){
            console.log(data);
            self.setState({states: data});
         })
         .error(function(err){
            console.log(err);
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

            {this.state.isEdition ? <AddPanel /> : null}
        </div>);
    }
});


ReactDOM.render(
    <AirlineApplication />,
    document.getElementById('airlineApplication')
);