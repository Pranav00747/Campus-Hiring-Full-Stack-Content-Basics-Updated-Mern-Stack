import React, {useState} from 'react';
import './Text1.css'
import Axios from 'axios'

const AddUserForm = (props) => {

    const nref = React.createRef();
    const uref = React.createRef();

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
            Axios.post('http://localhost:3001/register',{ 
             Name: nref.current.value,
             Company: uref.current.value
            }).then((res)=>
            {
                if(res)
                {
                    alert("Registered sucessfully added.");
                }
            }).catch((err)=>
            {
                     if(err)
                     {
                         alert(err);
                     }
            });
            
        }
    }
    const onMouseButtonOver=(event)=>
    {
    event.target.style="font-size:16px;color:yellow;";
    }
    const onMouseButtonLeave=(event)=>
    {
        event.target.style ="font-size:14px;color:white;";
    }
    const clearIt=(event)=>
    {
      nref.current.value='';
      uref.current.value='';
    }
    return (
        <form>
            <label  id="SmallText"><b>Name:</b></label>
            <input className="u-full-width" type="text" align ="center" ref = {nref} value={user.name} name="name" onChange={handleChange} /><p></p>
            <label  id="SmallText"><b>Company:</b></label>
            <input  className="u-full-width" type="text" align="center" ref = {uref} value={user.username} name="username" onChange={handleChange} /><p></p>
            <button className="button-primary" type="submit" id="b1" onClick={handleSubmit} onMouseOver={onMouseButtonOver} onMouseLeave={onMouseButtonLeave}>Register</button>
            <button id="b1" onClick={clearIt} onMouseOver={onMouseButtonOver} onMouseLeave={onMouseButtonLeave}>Clear</button>
        </form>
    )
}

export default AddUserForm;