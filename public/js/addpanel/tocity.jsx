var React = require('react');

var ToCity = React.createClass({
    render: function() {
        var cityOptions = this.props.cities.map(toOption);

        return (
        <div className="pure-u-4-24 toCity">
            <label>Город прибытия</label>
            <select className="pure-u-23-24" 
                    onChange={this.props.onToCityChange}
                    value={this.props.value}>
                {cityOptions}
            </select>
        </div>);

    function toOption(city){
        return (<option value={city}>{city}</option>);
    }
  }
});

module.exports = ToCity;