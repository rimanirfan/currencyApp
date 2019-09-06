import React from 'react';

class InputAmmount extends React.Component {
    state = {
        amount: '10.0000'
    }

    onInputChange = (event) => {
        this.setState({ amount: event.target.value });
    };

    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>USD - United States Dollar</label>
                    </div>
                    <div className="inline fields">
                        <label>USD</label>
                        <input 
                            type="text" 
                            value={this.state.amount}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default InputAmmount;