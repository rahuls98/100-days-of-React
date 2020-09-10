import React from 'react';
import { render } from 'react-dom';
import CounterContainer from '../components/CounterContainer';
import logTrigger from '../components/Trigger';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs : []
        }

        logTrigger("App - constructor()");
    }

    componentDidMount = () => {
        logTrigger("App - componentDidMount()");
    }

    render() {
        logTrigger("App - render()");

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