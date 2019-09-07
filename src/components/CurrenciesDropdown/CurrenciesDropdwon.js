import React from 'react';

class CurrenciesDropdown extends React.Component {

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.selectCurrency(this.refs.currencies.value);
    }

    render() {
        return(
            <form className="ui form" onSubmit={this.onSubmitForm}>
                <div className="two fields">
                    <div className="field">
                        <select ref="currencies" className="ui fluid dropdown">
                            <option value="IDR">IDR</option>
                            <option value="CAD">CAD</option>
                            <option value="GBP">GBP</option>
                            <option value="CHF">CHF</option>
                            <option value="SGD">SGD</option>
                            <option value="INR">INR</option>
                            <option value="MYR">MYR</option>
                            <option value="JPY">JPY</option>
                            <option value="KRW">KRW</option>
                        </select>
                    </div>
                    <div className="field">
                        <button type="submit" className="ui fluid button" tabIndex="0">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
};

export default CurrenciesDropdown;