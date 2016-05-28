var React = require('react');

var AirlineView = require('./airlinetable/airlineview.jsx')

var AirlineTable = React.createClass({
    render: function() {
        var airlines = this.props.airlines.map(toAirline);
        return (
         <div className="airlineTable">
            <table className="pure-table full-width">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Тип</th>
                        <th>Откуда</th>
                        <th>Куда</th>
                        <th>Время вылета</th>
                        <th>Время посадки</th>
                        <th>Статус</th>
                    </tr>
                </thead>

                <tbody>
                    {airlines}
                </tbody>
            </table>
        </div>);

    function toAirline(data){
        return (<AirlineView airline={data} />);
    }
  }
});

module.exports = AirlineTable;