var React = require('react');


var FromCity = React.createClass({ 
    render: function() {
        var cityOptions = this.props.cities.map(toOption);

        return (
        <div className="pure-u-4-24 fromCity">
            <label for="add_from_city">Город отправления</label>
            <select id="add_from_city" className="pure-u-23-24">
                {cityOptions}
            </select>
        </div>);

        function toOption(city){
            return (<option value={city}>{city}</option>);
        }

    }
});

module.exports = FromCity;