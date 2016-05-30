var React = require('react');

var SelectCell = React.createClass({
    onChange: function(e){
        this.props.onChange(this.props.name, e.target.value);
    },

    render: function() {
        var options = this.props.values.map(toOption);
        
        return (
        <td>
            {
                this.props.isEdition ? 
                 <select className="pure-u-23-24" 
                         onChange={this.onChange}
                         value={this.props.value}>
                         <option value="...">...</option>
                        {options}
                </select> :
                this.props.value
            }
        </td>
        );

        function toOption(value){
           return (<option value={value}>{value}</option>);
        }
    }
});

module.exports = SelectCell;