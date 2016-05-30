var React = require('react');


var FromCity = React.createClass({ 
    onChange: function(e){
        var city = e.target.value === '...' ? null : e.target.value;
        this.props.onChange(city);
    },
    render: function() {
        var cityOptions = this.props.cities.map(toOption);

        return (
        <div className="pure-u-6-24 fromCity">
            <label>Город отправления</label>
            <select className="pure-input-1-2" onChange={this.onChange}>
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