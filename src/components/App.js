import React from 'react';

import InputAmount from './inputAmount/inputAmount';

class App extends React.Component {

    onAmountChange = amount => {
        console.log('App: ', amount);
    }

    render() {
        return (
            <div className="ui container">
                <InputAmount onAmountChange={this.onAmountChange} />
            </div>            
        );
    };
}

export default App;