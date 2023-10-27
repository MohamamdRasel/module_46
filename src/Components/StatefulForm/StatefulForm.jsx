import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('Mohammad');
    const [number, setNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit =e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('');
            console.log(name, number, email, password);
        }
        
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleNumberChange = e => {
        setNumber(e.target.value);
    }

    const handlePasswordChange = e => {
        
        setPassword(e.target.value);
    }

    const handleEmailChange = e =>{
        
        setEmail(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" id="name"/>
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handleNumberChange} type="number" name="number" id="" />  
                <br />  
                <input onChange={handlePasswordChange} type="password" name="password" id="" required />    
                <br />      
                <input type="submit" value="Submit" id="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;