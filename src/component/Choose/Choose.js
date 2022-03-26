import React from 'react';
import './Choose.css'

const Choose = ({chooseOne}) => {
     
    return (
        <div className='choose-one'>
            <button onClick={()=>chooseOne()}> Choose one</button>
            <br />
            <button> Clear data </button>
        </div>
    );
};

export default Choose;