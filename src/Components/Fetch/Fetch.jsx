import React, { Component } from 'react';
import FetchDisplay from './FetchDisplay/FetchDisplay';


export default class Fetch extends Component{
    constructor(props){
        super(props);
        this.state = {
            img: ""
        }
    }

    componentWillMount() {
        console.log("I am about to say hello!")
    }

    componentDidMount(){
        console.log("Component mounted");
        fetch("https://random.dog/woof.json")
            .then(response => response.json())
            .then(json => this.setState({
                img: json.url
            }))
    }

    render(){

        return(
            <div>
                <FetchDisplay url={this.state.img} />
            </div>
        )
    }
}