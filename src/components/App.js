import React from 'react';

import InputAmount from './InputAmount/InputAmount';
import AddCurrency from './AddCurrency/AddCurrency';
import CurrenciesDropdown from './CurrenciesDropdown/CurrenciesDropdwon';
import exchangerates from '../api/exhangerates';

class App extends React.Component {

    state = {
        rate: 0,
        amount: 0,
        isAddCurrency: false,
        currencyList: []
    };
    
    onDropdownSelect = async (symbol) => {
        const response = await exchangerates.get('/latest', {
            params: {
                symbols: symbol
            }
        });
        this.setState({rate: Object.values(response.data.rates)[0]});

        const addExchange = {
            symbol: symbol,
            rate: this.state.rate
        };
        this.setState({ currencyList: [...this.state.currencyList, addExchange]});
    };

    triggerAddCurrency = () => {
        this.setState({isAddCurrency: !this.state.isAddCurrency});
    };

    onAmountChange = amount => {
        this.setState({amount});
    };
    
    render() {
        console.log(this.state.currencyList);
        return (
            <div className="ui container">
                <InputAmount onAmountChange={this.onAmountChange} />
                {!this.state.isAddCurrency && <AddCurrency addCurrency={this.triggerAddCurrency} />}
                {this.state.isAddCurrency && <CurrenciesDropdown addCurrency={this.triggerAddCurrency} selectCurrency={this.onDropdownSelect} />}
            </div>            
        );
    };
}

export default App;