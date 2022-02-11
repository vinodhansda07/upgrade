import React, { PureComponent } from 'react';

class Pure extends PureComponent {

    render() {
        console.log('Pure Component')
        return (
            <div>
                <h5>Pure</h5>
            </div>
        );
    }
}

export default Pure;