import React, { useState } from "react";
import axios from "axios";
function Form() {
  const [name, setName] = useState("");
  const [student, setStudent] = useState("");

  const addUser = async () => {
    const response = await axios.post("http://localhost:8080/users", {
      name: name,
      student: student,
    });
    console.log(response);
  };

  return (
    <div>
      <div className="formInput">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Please key in name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="formInput">
        <label>Student:</label>
        <input
          type="text"
          value={student}
          placeholder="Please key in student"
          onChange={(e) => setStudent(e.target.value)}
        />
      </div>
      <button onClick={addUser}>Send</button>
    </div>
  );
}

export default Form;
