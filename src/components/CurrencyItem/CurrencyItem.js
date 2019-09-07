import React from 'react';

const CurrencyItem = ({amount, currency}) => {
    return (
        <div>
            <div>{currency.symbol} {currency.rate * amount}</div>
            <div>{currency.symbol}</div>
            <div>1 USD = {currency.symbol} {currency.rate}</div>
        </div>
    );
};

export default CurrencyItem;