var React = require('react');

var AddState = require('./addstate.jsx');
var DeleteState = require('./deletestate.jsx');

var EditState = React.createClass({
    render: function() {
        return (
        <form className="pure-form EditState">
            <fieldset>
                <legend>Статус</legend>
                <div className="pure-g">
                    <AddState onAddState={this.props.onAddState}/>
                    <DeleteState states={this.props.states}/>
                </div>
            </fieldset>
        </form>);
  }
});

module.exports = EditState;