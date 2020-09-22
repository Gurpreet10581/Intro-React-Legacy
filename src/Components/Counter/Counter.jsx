import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay/CounterDisplay';


/*
The basic lifecycle of a React Component is:
    -creation
    -mounted
    -unmounted
    -destroyed

*/
export default class Counter extends Component{
    constructor(props){
        super(props);//gives us change change properties in parent class
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        })
        console.log("Increment:", this.state.count)
    }

    decrement = () => {
        this.setState({
            count: (this.state.count - 1)
        })
        console.log("Decrement:", this.state.count)

    }

    render(){
        return (
            <div>
                <CounterDisplay increment={this.increment} decrement={this.decrement} count={this.state.count} />
            </div>
        )
         
    }
}