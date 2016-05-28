var React = require('react');

var ControlPanel = React.createClass({
  render: function() {
    return (
    <div className="controlPanel">
        <form className="pure-form">
            <fieldset>
                <legend><h1>Авиарейсы</h1></legend>
                <div classNameName="pure-g">

                    <div className="pure-u-6-24">
                        <label for="from_city">Город отправления</label>
                        <select id="from_city" className="pure-input-1-2">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="pure-u-6-24">
                        <label for="to_city">Город прибытия</label>
                        <select id="to_city" className="pure-input-1-2">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="pure-u-5-24">
                        <label for="state">Статус</label>
                        <select id="state" className="pure-input-1-2">
                            <option>задержан</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="pure-u-3-24">
                        <div className="counter">Авиорейсов: 001</div>
                    </div>
                    <div className="pure-u-3-24">
                        <button className="button-large pure-button">Редактировать</button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>);
  }
});

module.exports = ControlPanel;