import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValues) => {
    setFormValues({ ...formValues, [inputName]: inputValues });
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMembers(teamMembers.concat(newMember));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Member Form</h1>
        <Form 
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
      </header>
      <div className='body'>
        <div className='member-container'>
          {teamMembers.map((member, index) => (
            <Member key={index} details={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
