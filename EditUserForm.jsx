import React, {useState, useEffect} from 'react';
import "./Text1.css"
const EditUserForm = (props) => {

     const nref = React.createRef();
     const uref = React.createRef();

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    return (
        <form>
            <label id="SmallText">Name</label>
            <input  className="u-full-width" type="text" ref = {nref} value={user.name} name="name" onChange={handleChange} />
            <label  id="SmallText">Company</label>
            <input  className="u-full-width" type="text" ref = {uref} value={user.username} name="username" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;