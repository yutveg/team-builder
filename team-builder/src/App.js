import React, { useState } from 'react';
import MemberForm from './Components/MemberForm.js'
import Members from './Components/Members.js';
import './App.css';

function App() {
  const [members, setTeamMember] = useState([
    {
    name: "Test",
    age: "Test",
    role: "Test"
  }]);
  
  const [toEdit, setToEdit] = useState();

  const addNewMember = (member) => {
    const newMember = {
      name: member.name,
      age: member.age,
      role: member.role
    };
    setTeamMember([...members, newMember])
  }

  return (
    <div className="App">
        <h1>List of Our Team:</h1>
        <MemberForm addNewMember={addNewMember} setTeamMember={setTeamMember} toEdit={toEdit} />
        <Members members={members} setToEdit={setToEdit} />
    </div>
  );
}

export default App;
