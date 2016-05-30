var React = require('react');

var AirlineView = require('./airlinetable/airlineview.jsx');
var ShowAirline = require('./airlinetable/showairline.jsx');
var EditionAirline = require('./airlinetable/editionairline.jsx');


var AirlineTable = React.createClass({
    getRows: function(){
        var self = this;
        return this.props.airlines
                         .map(this.props.isEditionTable ? toEditionAirline : toAirline);
    
        function toAirline(data){
            return (<AirlineView airline={data} />);
        }

        function toEditionAirline(data){
            return (<EditionAirline airline={data} 
                                    onSaveAirline={self.props.onSaveAirline}
                                    onDeleteAirline={self.props.onDeleteAirline} 
                                    cities={self.props.cities}
                                    states={self.props.states} 
                                    />);
        }
    },

    render: function() {
        var airlines = this.getRows();
        return (
         <div className="airlineTable">
            <form className="pure-form">
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
            </form>
        </div>);    
  }
});

module.exports = AirlineTable;