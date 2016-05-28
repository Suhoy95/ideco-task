var React = require('react');

var AirlineView = React.createClass({ 
    render: function() {
        return (
            <tr className="pure-table-odd">
                <td>{this.props.airline.number}</td>
                <td>{this.props.airline.planeType}</td>
                <td>{this.props.airline.fromCity}</td>
                <td>{this.props.airline.toCity}</td>
                <td>{this.props.airline.startTime}</td>
                <td>{this.props.airline.endTime}</td>
                <td>{this.props.airline.state}</td>
            </tr> 
        );
    }
});

module.exports = AirlineView;