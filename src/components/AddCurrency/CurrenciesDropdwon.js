import React from 'react';

const CurrenciesDropdown = ({addCurrency}) => {
    return(
        <form className="ui form">
            <div className="two fields">
                <div className="field">
                    <select className="ui fluid dropdown">
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
                    <div className="ui button" tabIndex="0" onClick={addCurrency}>Submit</div>
                </div>
            </div>
        </form>
    );
};

export default CurrenciesDropdown;