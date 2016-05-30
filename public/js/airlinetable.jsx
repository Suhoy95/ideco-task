var React = require('react');

var AirlineView = require('./airlinetable/airlineview.jsx');
var ShowAirline = require('./airlinetable/showairline.jsx');
var EditionAirline = require('./airlinetable/editionairline.jsx');


var AirlineTable = React.createClass({
    getInitialState: function() {
        return { 
            isEdition: false
        };
    }, 

    render: function() {
        var self = this;
        var airlines = this.props.airlines
                           .map(this.props.isEditionTable ? toEditionAirline : toAirline);
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
                        {this.props.isEditionTable ? <th> </th> : null}
                        {this.props.isEditionTable ? <th> </th> : null}
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

    function toEditionAirline(data){
        if(self.state.isEdition)
            return (<EditionAirline airline={data} />);
        return (<ShowAirline airline={data} />);
    }
  }
});

module.exports = AirlineTable;