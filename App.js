import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import './Main.css'

const App = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };
  return (
    <div id="back">
    <div className="container">
      <p id="MainText" align="center"><b>Company Hiring Systems</b></p>
      <div align ="center">
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <p id="MidText" align="center"><u>Edit Employee</u></p>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <p id="MidText" align="center"><u>Add Employee</u></p>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <p id="MidText" align="center"><u>View Employee</u></p>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
        </div>
      </div><p></p><p></p><p></p>
      <marquee id="mark1" width="100%" height="20%" direction="right">
        This is project is implemented by pranav on topic campus hiring and employee details system.
      </marquee>
    </div>
    </div>
  );
};

export default App;
