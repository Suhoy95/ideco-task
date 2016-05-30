var React = require('react');

var InputCell = React.createClass({
    onChange: function(e){
        this.props.onChange(this.props.name, e.target.value);
    },

    render: function() {
        return (
        <td>
            {
                this.props.isEdition ? 
                <input className="pure-u-23-24"
                   type="text" 
                   onChange={this.onChange}
                   value={this.props.value} /> :
                this.props.value
            }
        </td>
        );
    }
});

module.exports = InputCell;