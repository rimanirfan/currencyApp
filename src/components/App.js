import React from 'react';

import InputAmount from './inputAmount/inputAmount';
import exchangerates from '../api/exhangerates';

class App extends React.Component {

    state = {
        rates: [],
        amount: ''
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
            </div>            
        );
    };
}

export default App;