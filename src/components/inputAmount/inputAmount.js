import React from 'react';

class InputAmmount extends React.Component {
    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>USD - United States Dollar</label>
                    </div>
                    <div className="inline fields">
                        <label>USD</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        );
    };
}

export default InputAmmount;