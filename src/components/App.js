import React from 'react';

import InputAmount from './InputAmount/InputAmount';
import AddCurrency from './AddCurrency/AddCurrency';
import CurrenciesDropdown from './AddCurrency/CurrenciesDropdwon';
import exchangerates from '../api/exhangerates';

class App extends React.Component {

    state = {
        rates: [],
        amount: '',
        isAddCurrency: false
    };

    triggerAddCurrency = () => {
        this.setState({isAddCurrency: !this.state.isAddCurrency});
    };

    componentDidMount() {
      this.getExchangeRates();
    };

    getExchangeRates = async () => {
        const response = await exchangerates.get('/latest')
        this.setState({rates: response.data.rates})
        console.log(this.state.rates);
    };

    onAmountChange = amount => {
        this.setState({amount})
    };

    render() {
        return (
            <div className="ui container">
                <InputAmount onAmountChange={this.onAmountChange} />
                {!this.state.isAddCurrency && <AddCurrency addCurrency={this.triggerAddCurrency} />}
                {this.state.isAddCurrency && <CurrenciesDropdown addCurrency={this.triggerAddCurrency} />}
            </div>            
        );
    };
}

export default App;