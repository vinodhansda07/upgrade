import React, { useState } from 'react';
import withShop from './withShop';

const Foods = ({addItem, items}) => {
    
    return (
        <>
            <div className='row'>
                <div className='col'>
                    <button onClick={() => addItem()}>Add Food</button>
                </div>
            </div>
        </>
    );
};

export default withShop(Foods);