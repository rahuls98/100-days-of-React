import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log("Counter component - constructor()");
    }

    handleIncrement = () => this.setState({ count: this.state.count+1 });
    handleDecrement = () => this.setState({ count: this.state.count-1 });

    componentDidMount() {
        console.log("Counter component - componentDidMount()");
    }

    componentDidUpdate() {
        console.log("Counter component - componentDidUpdate()");
    }

    componentWillUnmount() {
        console.log("Counter component - componentWillUnmount()");
    }

    render() {
        console.log("Counter component - render()");
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