var React = require('react');

var FromCity = require('./fromcity.jsx');
var ToCity = require('./tocity.jsx');
var State = require('./state.jsx');

var AddAirline = React.createClass({
  render: function() {
    return (
    <form className="pure-form pure-form-stacked">
        <fieldset>
            <legend>Создать</legend>

            <div className="pure-g">
                <div className="pure-u-5-24">
                    <label for="airline_number">Номер рейса:</label>
                    <input id="airline_number" className="pure-u-23-24" type="text" />
                </div>
                <div className="pure-u-6-24">
                    <label for="airline_number">Тип самолета:</label>
                    <input id="airline_number" className="pure-u-23-24" type="text" />
                </div>

                <FromCity cities={this.props.cities}/>
                <ToCity cities={this.props.cities} />
                <State states={this.props.states} />
                
                <div className="pure-u-3-24">
                    <button className="button-large pure-button">Создать</button>
                </div>
            </div>
        </fieldset>
    </form>);
  }
});

module.exports = AddAirline;