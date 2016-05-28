var React = require('react');

var AirlineTable = React.createClass({
  render: function() {
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
                <tr className="pure-table-odd">
                    <td>1</td>
                    <td>Broiler 747</td>
                    <td>Москва</td>
                    <td>Екатеринбург</td>
                    <td>0000000</td>
                    <td>0000000</td>
                    <td>Вылетел</td>
                </tr>                  
            </tbody>
        </table>
    </div>);
  }
});

module.exports = AirlineTable;