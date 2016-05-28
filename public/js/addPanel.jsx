var React = require('react');

var AddPanel = React.createClass({
  render: function() {
    return (
    <div className="addPanel">
        <form className="pure-form pure-form-stacked">
            <fieldset>
                <legend>Создать</legend>

                <div className="pure-g">
                    <div className="pure-u-5-24">
                        <label for="airline_number">Номер рейса:</label>
                        <input id="airline_number" className="pure-u-23-24" type="text" />
                    </div>
                    <div className="pure-u-6-24">
                        <label for="airline_number">Тип самолета:</label>
                        <input id="airline_number" className="pure-u-23-24" type="text" />
                    </div>
                    <div className="pure-u-4-24">
                        <label for="from_city">Город отправления</label>
                        <select id="from_city" className="pure-u-23-24">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="pure-u-4-24">
                        <label for="to_city">Город прибытия</label>
                        <select id="to_city" className="pure-u-23-24">
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
                        <button className="button-large pure-button">Создать</button>
                    </div>
                </div>
            </fieldset>
        </form>
        <legend></legend>
        <form className="pure-form">
            <fieldset>
                <div className="pure-g">
                    <div className="pure-u-1-2">
                        <legend>Город</legend>
                        <div className="pure-g">
                            <div className="pure-u-1-2">
                                <p>
                                    <input id="airline_number" type="text" className="pure-u-23-24" />
                                </p>
                                <button className="button-large pure-button">Создать</button>
                            </div>
                            <div className="pure-u-1-2">
                                <p>
                                    <select id="state" className="pure-u-23-24">
                                        <option>задержан</option>
                                        <option>2</option>
                                    </select>
                                </p>
                                <button className="button-large pure-button">Удалить</button>  
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1-2">
                        <legend>Статус</legend>
                        <div className="pure-g">
                            <div className="pure-u-1-2">
                                <p>
                                    <input id="airline_number" type="text" className="pure-u-23-24" />
                                </p>
                                <button className="button-large pure-button">Создать</button>
                            </div>
                            <div className="pure-u-1-2">
                                <p>
                                    <select id="state" className="pure-u-23-24">
                                        <option>задержан</option>
                                        <option>2</option>
                                    </select>
                                </p>
                                <button className="button-large pure-button">Удалить</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>);
  }
});

module.exports = AddPanel;