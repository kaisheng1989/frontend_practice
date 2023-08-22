import React, { useState, useEffect } from "react";
import axios from "axios";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge]= useState("");
  const [currentCourse, setCurrentCourse]=useState("")
  const [users, setUsers] = useState([]);


useEffect(()=>{
  getUsers();
},[])

const getUsers =async () => {
  let data = await axios.get("http://localhost:8080/users")
  setUsers(data.data.users)
}



  const addUser = async () => {
    const response = await axios.post("http://localhost:8080/users", {
     first_name:firstName,
     last_name: lastName,
     age: age,
     current_course: currentCourse,
    });
    console.log(response);
    //setUsers(response.data.data);
    const newUser = [...users, response.data.users];
    setUsers(newUser)
  };
  

  /*
  WIthout async and await
  axios.post("http://locahost:8080/users",{
    name:name,
    student:student,
  })
  .then((response) =>{
    console.log(response);
    setUsers(response.data.data)
  })
  
  
  
  
  */

  return (
    <div>
      <div className="formInput">
        <label> First Name:</label>
        <input
          type="text"
          value={firstName}
          placeholder="Please key in First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="formInput">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          placeholder="Please key in Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="formInput">
        <label>Age:</label>
        <input
          type="integer"
          value={age}
          placeholder="Please key in age"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="formInput">
        <label>Current Course:</label>
        <input
          type="text"
          value={currentCourse}
          placeholder="Please key in Last Name"
          onChange={(e) => setCurrentCourse(e.target.value)}
        />
      </div>
      <button onClick={addUser}>Send</button>

      {users && users.length > 0 ? (
        users.map((user) => {
          return (
            <div key={user.id}>
            <p>
              {user.first_name} - {user.last_name}
            </p>
             <p>
              {user.age} - {user.current_course}
            </p>
            </div>
          );
        })
      ) : (
        <p>No users</p>
      )}
    </div>
  );
}

export default Form;
