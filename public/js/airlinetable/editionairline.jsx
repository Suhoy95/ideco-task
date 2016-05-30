var React = require('react');

var InputCell = require('./inputcell.jsx');
var SelectCell = require('./selectcell.jsx');

var AdminAirlineView = React.createClass({
    getInitialState: function() {
        return { 
            id: 0,
            number: "",
            planeType: "",
            fromCity: "",
            toCity: "",
            startTime: "",
            endTime: "",
            state: "",
            isEdition: false
        };
    }, 

    componentDidMount: function() {
        // console.log(this.state);
        if(this.state.id != this.props.airline.id){
            this.setState(this.props.airline);
            // console.log(this.props.airline);
        }
    },

    onChange: function(name, value){
        var data = {};
        data[name] = value;
        this.setState(data);
    },

    changeMode: function(e){
        var newMode = !this.state.isEdition;
        this.setState({isEdition: newMode});
        if(!newMode){
            this.props.onSaveAirline({
                        id: this.state.id,
                        number: this.state.number,
                        planeType: this.state.planeType,
                        fromCity: this.state.fromCity,
                        toCity: this.state.toCity,
                        startTime: this.state.startTime,
                        endTime: this.state.endTime,
                        state: this.state.state 
            });
        }
        e.preventDefault();
    },

    onDelete: function(e){
        this.props.onDeleteAirline(this.state.id);
        e.preventDefault();
    },

    render: function() {
        return (
            <tr className="pure-table-odd">
                <InputCell isEdition={this.state.isEdition}
                           name="number"
                           onChange={this.onChange}
                           value={this.state.number} />
                <InputCell isEdition={this.state.isEdition}
                           name="planeType"
                           onChange={this.onChange}
                           value={this.state.planeType} />
                <SelectCell isEdition={this.state.isEdition}
                           name="fromCity"
                           onChange={this.onChange}
                           value={this.state.fromCity}
                           values={this.props.cities} />
                <SelectCell isEdition={this.state.isEdition}
                           name="toCity"
                           onChange={this.onChange}
                           value={this.state.toCity}
                           values={this.props.cities} />
                <InputCell isEdition={this.state.isEdition}
                           name="startTime"
                           onChange={this.onChange}
                           value={this.state.startTime} />
                <InputCell isEdition={this.state.isEdition}
                           name="endTime"
                           onChange={this.onChange}
                           value={this.state.endTime} />
                <SelectCell isEdition={this.state.isEdition}
                           name="state"
                           onChange={this.onChange}
                           value={this.state.state}
                           values={this.props.states} />
                <td><button className="pure-button" 
                            onClick={this.changeMode}>
                            {this.state.isEdition ? "Сохранить" : "Редактировать"}
                    </button></td>
                <td><button className="pure-button" 
                            onClick={this.onDelete}>
                            Удалить
                    </button></td>
            </tr>
        );
    }
});

module.exports = AdminAirlineView;