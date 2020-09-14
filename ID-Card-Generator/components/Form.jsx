import React from 'react';

const Form = ({ name, setName, count, incCount, decCount, tag, setTag, addTag, tags, removeTag }) => {
    return (
        <div className="formComponent">
            <form>
                <table>
                    <tbody>
                        <tr className="formRow">
                            <td><label htmlFor="fname">First Name: </label></td>
                            <td>
                                <input autoComplete="off"
                                    id="fname" type="text"
                                    value={name.fname||""}
                                    onChange={e => setName({ ...name, fname: e.target.value})}
                                />
                            </td>
                        </tr>
                        <tr className="formRow">
                            <td><label htmlFor="lname">Last Name: </label></td>
                            <td>
                                <input autoComplete="off"
                                    id="lname" type="text"
                                    value={name.lname||""}
                                    onChange={e => setName({...name, lname: e.target.value})}
                                />
                            </td>
                        </tr>
                        <tr className="formRow">
                            <td>
                                <label htmlFor="secLevel">Security Clearance: </label>
                            </td>
                            <td id="countControl">
                                <button className="formBtn" type="button" onClick={decCount}>-</button>
                                <span>{count}</span>
                                <button className="formBtn" type="button" onClick={incCount}>+</button>
                            </td>
                        </tr>

                        <tr className="formRow">
                            <td>
                                <label htmlFor="access">Allowed access: <br/>(Depts: IT, LOG, LAB)</label>
                            </td>
                            <td>
                                <input autoComplete="off"
                                    id="access" type="text" name="access"
                                    value={tag}
                                    onChange={e => setTag(e.target.value)}
                                />
                                <button className="formBtn" id="accessAdd" onClick={addTag}>Add</button>
                            </td>
                        </tr>

                        <tr className="formRow">
                            <td></td>
                            <td className="spanContainer">
                                {
                                    tags.map((tag,index) => {
                                        return (
                                            <span key={tag} className="tagPill">
                                                {tag}
                                                <button type="button" className="spanBtn" onClick={() => removeTag(tag)}>x</button>
                                            </span>
                                        )
                                    })
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Form;