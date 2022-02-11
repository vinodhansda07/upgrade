import React, { Component } from 'react';
import Memo from './Memo';
import Pure from './Pure';
import Child from './Child';
import Rc from './Rc';
import Reg from './Reg';
import ErrorBoundary from './ErrorBoundary';

class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            timer: '', 
            name: '', 
            num: 0, 
            hasError: false, 
            anonym: '',
            list: [1,2,3,4]
        };
        //this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        //this.state.anonym = 'XYZ';
        /* setInterval(()=>{
            this.setState({timer: this.state.timer})
        },1000) */
        this.setState({name: 'Vinod'},()=>{
            console.log('State set')
        })
    }

    incrNum = (number) => {
        this.setState((prevState, prop) => ({
            num: prevState.num + number
        }))
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps)
        console.log(this.state)
        console.log(nextState)
        return true;
    }

    static getStateFromProps(a){
        console.log(a)
    }

    getSnapshotBeforeUpdate(){
        return 5;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps)
        console.log(prevState)
        console.log(snapshot)
    }

    handleClick = () => {
        console.log(this)
    }
   

    render() {
        
        return (
            <div>
                <ul>
                    {this.state.list.map((element,ind) => {
                       <li key={ind}>{element}</li>
                    })}
                </ul>
                <h3>{this.state.timer}</h3>
                <h3>{this.state.name}</h3>
                {/* <h3>{this.state.num}</h3> */}
                {this.state.hasError && 
                    <h3>This page has error</h3>
                }
                {/* <Memo/> */}
                {/* <Reg />
                <Pure />
                <Rc /> */}
                <ErrorBoundary>
                    <Child incrNum={this.incrNum} num={this.state.num} title=""/>
                </ErrorBoundary>
                <button onClick={this.handleClick}>Synthetic</button>
            </div>
        );
    }
}

export default Parent;