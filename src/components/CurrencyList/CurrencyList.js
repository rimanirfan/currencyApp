import React from 'react';

import CurrencyItem from '../CurrencyItem/CurrencyItem';

const CurrencyList = ({amount, currencyList}) => {
    const renderedList = currencyList.map((currency) => {
        return <CurrencyItem amount={amount} currency={currency} />
    });

    return <div>{renderedList}</div>
};

export default CurrencyList;