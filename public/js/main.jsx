var React = require('react');
var ReactDOM = require('react-dom');

var ControlPanel = require('./controlpanel.jsx');
var AirlineTable = require('./airlinetable.jsx');
var AddPanel = require('./addpanel.jsx');

var AirlineApplication = React.createClass({
  render: function() {
    return (
        <div className="AirlineApplication">
            <ControlPanel />
            <AirlineTable />
            <AddPanel />
        </div>
    );
  }
});


ReactDOM.render(
    <AirlineApplication />,
    document.getElementById('airlineApplication')
);