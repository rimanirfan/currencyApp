import React from 'react';

import InputAmount from './InputAmount/InputAmount';
import AddCurrency from './AddCurrency/AddCurrency';
import CurrenciesDropdown from './CurrenciesDropdown/CurrenciesDropdwon';
import CurrencyList from './CurrencyList/CurrencyList';
import exchangerates from '../api/exhangerates';

class App extends React.Component {

    state = {
        rate: 0,
        amount: '10.0000',
        isAddCurrency: false,
        currencyList: []
    };

    setCurrencyDetail(symbol) {
        switch(symbol) {
            case 'IDR':
                return 'Indonesian Rupiah';
            case 'EUR':
                return 'Euro';
            case 'GBP':
                return 'Britain Pound';
            case 'SGD':
                return 'Singapore Dollar';
            case 'JPY':
                return 'Japanese Yen';
            case 'CAD':
                return 'Canadian Dollar';
            case 'INR':
                return 'Indian Rupee';
            case 'KRW':
                return 'South Korean Won';
            case 'MYR':
                return 'Malaysian Ringgit';
            case 'CHF':
                return 'Swiss Franc';
            default:
                return '';
        }
    };

    deleteCurrency = (currency) => {

        this.setState({currencyList: this.state.currencyList.filter(item => item.symbol !== currency)});
    };
    
    onDropdownSelect = async (symbol) => {
        const response = await exchangerates.get('/latest', {
            params: {
                symbols: symbol
            }
        });
        this.setState({rate: Object.values(response.data.rates)[0]});

        const detail = this.setCurrencyDetail(symbol);
        const addExchange = {
            symbol: symbol,
            detail: detail,
            rate: this.state.rate
        };
        this.setState({ currencyList: [...this.state.currencyList, addExchange]});
        this.triggerAddCurrency();
    };

    triggerAddCurrency = () => {
        this.setState({isAddCurrency: !this.state.isAddCurrency});
    };

    onAmountChange = amount => {
        this.setState({amount});
    };

    render() {
        return (
            <div className="ui container">
                <InputAmount onAmountChange={this.onAmountChange} amount={this.state.amount} />
                <CurrencyList amount={this.state.amount} currencyList={this.state.currencyList} deleteCurrency={this.deleteCurrency} />
                {!this.state.isAddCurrency && <AddCurrency addCurrency={this.triggerAddCurrency} />}
                {this.state.isAddCurrency && <CurrenciesDropdown addCurrency={this.triggerAddCurrency} selectCurrency={this.onDropdownSelect} />}
            </div>            
        );
    };
}

export default App;