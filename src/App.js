import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const userListHanlder = (newName, newAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: newName, age: newAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={userListHanlder} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
