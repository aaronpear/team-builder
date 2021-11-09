import React from "react";
import '../App.css';

const Form = (props) => {
    const { values, update, submit } = props;
    
    const onChange = evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
      }
    
      const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }
    

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-inputs'>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                        maxLength='35'
                    />
                </label>
                <label>Email
                    <input
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>
                        -- Select a Role --
                        </option>
                        <option value='Backend Engineer'>
                            Backend Engineer
                        </option>
                        <option value='Frontend Engineer'>
                            Frontend Engineer
                        </option>
                        <option value='Designer'>
                            Designer
                        </option>
                        <option value='Coffee Maker'>
                            Coffee Maker
                        </option>
                        <option value='Donut'>
                            Donut
                        </option>
                        <option value='Idiot Sandwich'>
                            Idiot Sandwich
                        </option>
                    </select>
                </label>
                <button className='submit' disabled={!values.name || !values.email || !values.role}>submit</button>
            </div>
        </form>
    );
}

export default Form;
