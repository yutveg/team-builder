import React, { useState } from 'react';

function MemberForm(props) {
    const [member, setMember] = useState({
        name: "",
        age: "",
        role: ""
        });

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember({member})
        setMember({title: "", body: "" });
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input id="name" 
                name="name" 
                type="text" 
                value={member.name} 
                onChange={handleChange} />
                <label htmlFor="age">Age</label>
                <input 
                id="age" 
                name="age" 
                type="text" 
                value={member.age} 
                onChange={handleChange} />
                <label htmlFor="role">Role</label>
                <input 
                id="role" 
                name="role" 
                type="text" 
                value={member.role} 
                onChange={handleChange} />
                <button type="submit">Add Member</button>
            </form>
        </div>
    )
}

export default MemberForm;