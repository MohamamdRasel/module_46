import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const numberRef = useRef(null);

    useEffect(() =>{
        nameRef.current.focus();
    })


    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(numberRef.current.value);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" id="name"/>
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />  
                <input ref={passwordRef} type="password" name="password" id="" required />    
                <br />
                <input ref={numberRef} type="number" name="number" id="" />    
                <br />      
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
    );
};

export default RefForm;