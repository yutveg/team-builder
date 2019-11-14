import React, { useState, useEffect } from 'react';

function MemberForm(props) {
    const [member, setMember] = useState({
        name: "",
        age: "",
        role: ""
        });

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value})
        console.log(e.target.value);
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member)
        setMember({name: "", age: "", role: ""});
    }

    // useEffect((props) => {
    //     props.setTeamMembers(member);
    // }, [member])

    return (
        <div className="member-form">
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
                <br />
                <button type="submit">Add Member</button>
            </form>
        </div>
    )
}

export default MemberForm;