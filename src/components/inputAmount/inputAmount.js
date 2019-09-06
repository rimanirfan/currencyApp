import React from 'react';

import './InputAmount.css';

class InputAmount extends React.Component {
    state = {
        amount: '10.0000'
    }

    onInputChange = (event) => {
        this.setState({ amount: event.target.value });
        this.props.onAmountChange(event.target.value);
    };

    render() {
        return (
            <form className="ui form border">
                <div className="field">
                    <label>USD - United States Dollar</label>
                </div>
                <div className="inline fields">
                    <label>USD</label>
                    <input 
                        className="form-input"
                        type="number" 
                        value={this.state.amount}
                        onChange={this.onInputChange}
                    />
                </div>
            </form>
        );
    };
}

export default InputAmount;