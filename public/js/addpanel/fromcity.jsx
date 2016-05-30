var React = require('react');


var FromCity = React.createClass({ 
    render: function() {
        var cityOptions = this.props.cities.map(toOption);

        return (
        <div className="pure-u-4-24 fromCity">
            <label>Город отправления</label>
            <select className="pure-u-23-24" 
                    onChange={this.props.onFromCityChange}
                    value={this.props.value}>
                <option value="...">...</option>
                {cityOptions}
            </select>
        </div>);

        function toOption(city){
            return (<option value={city}>{city}</option>);
        }

    }
});

module.exports = FromCity;