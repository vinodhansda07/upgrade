import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(){
        super();
        this.state = {hasError: false}
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }

    static getDerivedStateFromError(error){
        console.log(error)
        return { hasError: true }
    }

    render() {
        
        if(this.state.hasError){
            return <h5>Something went wrong!</h5>
        }
        return this.props.children
    }
}

export default ErrorBoundary;