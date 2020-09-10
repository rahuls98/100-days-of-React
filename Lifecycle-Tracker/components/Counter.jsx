import React from "react";
import logTrigger from '../components/Trigger';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        logTrigger("Counter component - constructor()");
    }

    handleIncrement = () => this.setState({ count: this.state.count+1 });
    handleDecrement = () => this.setState({ count: this.state.count-1 });

    componentDidMount() {
        logTrigger("Counter component - componentDidMount()");
    }

    componentDidUpdate() {
        logTrigger("Counter component - componentDidUpdate()");
    }

    componentWillUnmount() {
        logTrigger("Counter component - componentWillUnmount()");
    }

    render() {
        logTrigger("Counter component - render()");

        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;