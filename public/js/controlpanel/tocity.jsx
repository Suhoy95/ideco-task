var React = require('react');

var ToCity = React.createClass({
    render: function() {
        var cityOptions = this.props.cities.map(toOption);

        return (
        <div className="pure-u-6-24 toCity">
            <label for="to_city">Город прибытия</label>
            <select id="to_city" className="pure-input-1-2">
                {cityOptions}
            </select>
        </div>);

    function toOption(city){
        return (<option value={city}>{city}</option>);
    }
  }
});

module.exports = ToCity;