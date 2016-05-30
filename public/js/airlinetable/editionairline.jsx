var React = require('react');

var AdminAirlineView = React.createClass({
    getInitialState: function() {
        return { 
            airline: {}
        };
    }, 

    componentDidMount: function() {
        this.setState({airline:this.props.airline})
    },

    onDelete: function(e){
        this.props.onDeleteAirline(this.state.airline.id);
        e.preventDefault();
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
                <td><button className="pure-button">Сохранить</button></td>
                <td><button className="pure-button" onClick={this.onDelete}>Удалить</button></td>
            </tr>
        );
    }
});

module.exports = AdminAirlineView;