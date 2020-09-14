import React from 'react';

const Card = ({ name, count, tags }) => {
    return (
        <div className="cardComponent">
            <div className="card">
                <div id="cardImage">
                    <i className="fa fa-user-circle"></i>
                </div>
                <p id="cardName">{ `Name: ${name.fname} ${name.lname}` }</p>
                <p id="cardSecClr">{ `Level: ${count}` }</p>
                <p id="cardAccess">
                    Access:
                    {
                        tags.map((tag, index) => (index==0)?` ${tag}`:`, ${tag}`)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;