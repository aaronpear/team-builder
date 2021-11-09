import React from "react";
import '../App.css';

const Member = (props) => {
    const { details } = props;

    return (
        <div className='member'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default Member;