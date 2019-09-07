import React from 'react';

import './CurrencyItem.css';

const CurrencyItem = ({amount, currency}) => {
    return (
        <div className="ui aligned centered grid currency-item">
            <div className="fourteen wide column border-right">
                <div className="ui grid">
                    <div className="four wide column">{currency.symbol}</div>
                    <div className="twelve wide column text-right">{currency.rate * amount}</div>
                </div>
                <div className="text-bold text-italic">{currency.symbol} - {currency.detail}</div>
                <div className="text-italic">1 USD = {currency.symbol} {currency.rate}</div>
            </div>
            <div className="two wide middle aligned column">(-)</div>
        </div>
    );
};

export default CurrencyItem;