var React = require('react');

var AddCity = React.createClass({
     getInitialState: function() {
        return { 
            city: ""
        };
    },

    onAddCity: function(e){
        var newCity = this.state.city;
        if(newCity === '')
            return;

        this.props.onAddCity(newCity);
        this.setState({city: ''});
        e.preventDefault();        
    },

    onCityChange: function(e){
        this.setState({city:e.target.value})
    },

    render: function() {
        return (
        <div className="pure-u-1-2 addCity">
            <p>
                <input id="airline_number" type="text" 
                       className="pure-u-23-24" 
                       onChange={this.onCityChange}
                       value={this.state.city}/>
            </p>
            <button className="button-large pure-button" 
                    onClick={this.onAddCity}>Создать</button>
        </div>);
  }
});

module.exports = AddCity;