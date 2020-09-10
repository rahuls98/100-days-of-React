import React from 'react';
import { render } from 'react-dom';
import CounterContainer from '../components/CounterContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs : []
        }

        console.log("App - constructor()");
    }

    componentDidMount = () => {
        console.log("App - componentDidMount()");
    }

    render() {
        console.log("App - render()");

        return (
            <div>
                <CounterContainer append={this.appendEvent}/>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById("root")
);