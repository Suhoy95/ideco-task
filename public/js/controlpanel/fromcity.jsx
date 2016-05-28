var React = require('react');


var FromCity = React.createClass({ 
    render: function() {
        var cityOptions = this.props.cities.map(toOption);

        return (
        <div className="pure-u-6-24 fromCity">
            <label for="from_city">Город отправления</label>
            <select id="from_city" className="pure-input-1-2">
                {cityOptions}
            </select>
        </div>);

        function toOption(city){
            return (<option value={city}>{city}</option>);
        }

    }
});

module.exports = FromCity;