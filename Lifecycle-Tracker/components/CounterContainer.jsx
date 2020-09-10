import React from 'react';
import Counter from './Counter';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mount: false
        }
        this.handleMount = this.handleMount.bind(this);
        console.log("CounterContainer component - constructor()");
    }

    handleMount() {
        var mount = this.state.mount;
        this.setState({
            mount: !mount
        })
    }

    componentDidMount() {
        console.log("CounterContainer component - componentDidMount()");
    }

    componentDidUpdate() {
        console.log("CounterContainer component - componentDidUpdate()");
    }

    render () {
        console.log("CounterContainer component - render()");

        var counter = this.state.mount? <Counter />:""
        return (
            <div className="counterContainer">
                <h1>Counter</h1>
                <button disabled={this.state.mount} onClick={this.handleMount}>Mount counter</button>
                <button disabled={!this.state.mount} onClick={this.handleMount}>Unmount counter</button>

                <br/>
                {counter}
            </div>
        )
    }
}

export default CounterContainer;