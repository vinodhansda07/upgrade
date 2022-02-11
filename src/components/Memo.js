import React from 'react';

function Memo() {
    console.log('Memo component')
    return (
        
        <div>
            <h5>React memo</h5>
        </div>
    );
}

export default React.memo(Memo);