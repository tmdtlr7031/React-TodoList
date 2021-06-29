import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeypress, nowColor}) =>{
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeypress} style={{color: nowColor}} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;