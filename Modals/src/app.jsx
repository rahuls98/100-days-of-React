import React from 'react'
import { render } from 'react-dom';
import Table from '../components/Table';

const App = () => {
    return (
        <div>
            <table>
                <Table />
            </table>
        </div>
    )
}

render(
    <App />,
    document.getElementById("root")
)