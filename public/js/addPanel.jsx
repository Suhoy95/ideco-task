var React = require('react');

var AddAirline = require('./addpanel/addairline.jsx');
var EditCity = require('./addpanel/editcity.jsx');
var EditState = require('./addpanel/editstate.jsx');


var AddPanel = React.createClass({
  render: function() {
    return (
    <div className="addPanel">
        <AddAirline cities={this.props.cities}
                    states={this.props.states}/>

        <legend></legend>
        <div className="pure-g">
            <div className="pure-u-1-2">
                <EditCity cities={this.props.cities}
                          onAddCity={this.props.onAddCity}
                          onDeleteCity={this.props.onDeleteCity}
                 />
            </div>
            <div className="pure-u-1-2">
                <EditState states={this.props.states}
                           onAddState={this.props.onAddState}
                           onDeleteState={this.props.onDeleteState} />
            </div>
        </div>
    </div>);
  }
});

module.exports = AddPanel;