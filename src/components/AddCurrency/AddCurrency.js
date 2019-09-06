import React from 'react';

const AddCurrency = ({addCurrency}) => {
    return(
        <div className="ui fluid labeled button" onClick={addCurrency}>
            <div className="ui button">(+)</div>
            <div className="ui fluid basic label">Add More Currencies</div>
        </div>
    );
};

export default AddCurrency;