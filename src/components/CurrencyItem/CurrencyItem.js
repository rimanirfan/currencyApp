import React from 'react';

import './CurrencyItem.css';

const formatNumber = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

const CurrencyItem = ({amount, currency, deleteCurrency}) => {

    return (
        <div className="ui aligned centered grid currency-item">
            <div className="fourteen wide column border-right">
                <div className="ui grid">
                    <div className="four wide column">{currency.symbol}</div>
                    <div className="twelve wide column text-right">{formatNumber(currency.rate * amount)}</div>
                </div>
                <div className="text-bold text-italic">{currency.symbol} - {currency.detail}</div>
                <div className="text-italic">1 USD = {currency.symbol} {formatNumber(currency.rate)}</div>
            </div>
            <div className="two wide middle aligned column btn-delete" onClick={() => deleteCurrency(currency.symbol)}>(-)</div>
        </div>
    );
};

export default CurrencyItem;