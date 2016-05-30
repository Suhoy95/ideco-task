var React = require('react');

var ShowAirlineView = React.createClass({
    getInitialState: function() {
        return { 
            airline: {}
        };
    }, 

    componentDidMount: function() {
        this.setState({airline:this.props.airline})
    },

    render: function() {
        return (
            <tr className="pure-table-odd">
                <td>{this.state.airline.number}</td>
                <td>{this.state.airline.planeType}</td>
                <td>{this.state.airline.fromCity}</td>
                <td>{this.state.airline.toCity}</td>
                <td>{this.state.airline.startTime}</td>
                <td>{this.state.airline.endTime}</td>
                <td>{this.state.airline.state}</td>
                <td><button className="pure-button">Редктировать</button></td>
                <td><button className="pure-button">Удалить</button></td>
            </tr>
        );
    }
});

module.exports = ShowAirlineView;