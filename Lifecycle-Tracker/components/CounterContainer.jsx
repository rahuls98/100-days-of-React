import React from 'react';
import Counter from './Counter';
import logTrigger from '../components/Trigger';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mount: false
        }
        this.handleMount = this.handleMount.bind(this);
        logTrigger("CounterContainer component - constructor()");
    }

    handleMount() {
        var mount = this.state.mount;
        this.setState({
            mount: !mount
        })
    }

    componentDidMount() {
        logTrigger("CounterContainer component - componentDidMount()");
    }

    componentDidUpdate() {
        logTrigger("CounterContainer component - componentDidUpdate()");
    }

    render () {
        logTrigger("CounterContainer component - render()");

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