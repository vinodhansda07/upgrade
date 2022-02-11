import React, { useState } from 'react';
import withShop from './withShop';

const Drinks = ({addItem}) => {

    return (
            <div className='row'>
                <div className='col'>
                    <button onClick={() => addItem()}>Add Drink</button>
                </div>
            </div>
    );
};

export default withShop(Drinks);