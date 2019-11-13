import React from 'react';

function Members(props) {

    return(
        <div className="member-list">
            {props.members.map((member, index) => {
                return (
                    <div key={index} className="member">
                        <h1>Name: {member.name}</h1>
                        <h2>Age: {member.age}</h2>
                        <h2>Role: {member.role}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Members;