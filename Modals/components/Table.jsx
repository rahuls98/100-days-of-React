import React from 'react'
import Row from '../components/Row';

const detailsObj = [
    {
        id: "ID_115",
        name: "Alvin",
        age: 10,
        color: "Red"
    }, 
    {
        id: "ID_116",
        name: "Simon",
        age: 12,
        color: "Blue"
    },
    {
        id: "ID_117",
        name: "Theodore",
        age: 10,
        color: "Green"
    }
]

const Table = () => {
    return (
        <tbody>{
            detailsObj.map((details, index) => {
                return <tr key={details.id}> 
                <Row details={details}></Row> 
                </tr>
            })
        }</tbody>
    )
}

export default Table;