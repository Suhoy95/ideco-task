var React = require('react');

var AddCity = require('./addcity.jsx');
var DeleteCity = require('./deletecity.jsx');

var EditCity = React.createClass({
    render: function() {
        return (
        <form className="pure-form EditCity">
            <fieldset>
                <legend>Город</legend>
                <div className="pure-g">
                    <AddCity onAddCity={this.props.onAddCity}/>
                    <DeleteCity cities={this.props.cities}
                                onDeleteCity={this.props.onDeleteCity}/>
                </div>
            </fieldset>
        </form>);
  }
});

module.exports = EditCity;