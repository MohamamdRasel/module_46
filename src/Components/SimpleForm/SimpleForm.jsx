
const SimpleForm = () => {

    const handleSubmit = e =>{   
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
        console.log('form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name"/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="number" name="number" id="" />    
                <br />                 
                <input onChange={handlePasswordChange} type="password" name="password" id="" required />    
                <br />    
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;