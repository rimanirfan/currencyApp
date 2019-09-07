import React from 'react';

import CurrencyItem from '../CurrencyItem/CurrencyItem';

const CurrencyList = ({amount, currencyList, deleteCurrency}) => {
    const renderedList = currencyList.map((currency) => {
        return <CurrencyItem key={currency.symbol} amount={amount} currency={currency} deleteCurrency={deleteCurrency} />
    });

    return <div>{renderedList}</div>
};

export default CurrencyList;