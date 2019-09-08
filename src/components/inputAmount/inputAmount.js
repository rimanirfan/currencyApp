import React from 'react';

import './InputAmount.css';

class InputAmount extends React.Component {

    onInputChange = (event) => {
        this.props.onAmountChange(event.target.value);
    };

    render() {
        return (
            <form className="ui form border">
                <div className="field">
                    <label className="header">USD - United States Dollar</label>
                </div>
                <div className="inline fields">
                    <label>USD</label>
                    <input 
                        className="form-input"
                        type="number" 
                        value={this.props.amount}
                        onChange={this.onInputChange}
                    />
                </div>
            </form>
        );
    };
}

export default InputAmount;