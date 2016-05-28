var React = require('react');

var DeleteCity = React.createClass({
     getInitialState: function() {
        return { 
            city: ""
        };
    },

    onDeleteCity: function(e){
        var deleteCity = this.state.city;
        if(deleteCity === '')
            return;

        this.props.onDeleteCity(deleteCity);
        this.setState({city: '...'});
        e.preventDefault();        
    },

    onCityChange: function(e){
        this.setState({city:e.target.value})
    },

    render: function() {
        var cityOptions = this.props.cities.map(toOption);

        return (
        <div className="pure-u-1-2 deleteCity">
            <p>
                <select className="pure-u-23-24" onChange={this.onCityChange}>
                    {cityOptions}
                </select>
            </p>
            <button className="button-large pure-button"
                    onClick={this.onDeleteCity}>Удалить</button>
        </div>);

        function toOption(city){
            return (<option value={city}>{city}</option>);
        }
  }
});

module.exports = DeleteCity;