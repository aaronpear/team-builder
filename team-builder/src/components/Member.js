import React from "react";

const Member = (props) => {
    const { details } = props;

    return (
        <div className='friend-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default Member;