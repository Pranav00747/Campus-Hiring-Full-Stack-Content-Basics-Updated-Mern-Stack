import React from 'react';
import './Table1.css'

const onMouseButtonOver=(event)=>
{
event.target.style="font-size:16px;color:yellow;";
}
const onMouseButtonLeave=(event)=>
{
    event.target.style ="font-size:14px;color:white;";
}

const UserTable = (props) => {
   
    return (
        <table>
            <thead>
                <tr>
                    <th id="th1">ID</th>
                    <th id="th1">Name</th>
                    <th id="th1">Company</th>
                    <th id="th1">Actions</th>
                </tr>
            </thead>
            <p></p>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, username} = user;
                        return (
                            <tr key={id}>
                                <td id="td1">{id}</td>
                                <td id="td1">{name}</td>
                                <td id="td1">{username}</td>
                                <td>
                                    <button id="b1" onClick={() => props.deleteUser(id)} onMouseOver={onMouseButtonOver} onMouseLeave={onMouseButtonLeave}>Delete</button>
                                    <button id="b1" onClick={() => props.editUser(id, user)} onMouseOver={onMouseButtonOver} onMouseLeave={onMouseButtonLeave}>Update</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td id="td1" align ="center" colSpan={4}>No  employees in database.</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default UserTable;