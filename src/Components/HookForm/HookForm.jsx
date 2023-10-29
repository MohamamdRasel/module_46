import React from 'react';
import useInputState from '../../assets/hooks/useInputState';

const HookForm = () => {

    const [name, handleNameChange] = useInputState('Mohammad')

    const handleSubmit = e => {
        console.log('form data', name)
        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input  value={name} onChange={handleNameChange} type="text" name="name" id="name"/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="number" name="number" id="" />    
                <br />                 
                <input type="password" name="password" id="" required />    
                <br />    
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
    );
};

export default HookForm;