var React = require('react');

var ToCity = React.createClass({
    render: function() {
        var cityOptions = this.props.cities.map(toOption);

        return (
        <div className="pure-u-4-24 toCity">
            <label for="add_to_city">Город прибытия</label>
            <select id="add_to_city" className="pure-u-23-24">
                {cityOptions}
            </select>
        </div>);

    function toOption(city){
        return (<option value={city}>{city}</option>);
    }
  }
});

module.exports = ToCity;