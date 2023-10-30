import { Children } from "react";

const ReuseAbleForm = ({formTitle, handleSubmit, submitBtnText ='Submit', children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
   


    return (
        <div>
            {children}
             <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" id="name"/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="number" name="number" id="" />    
                <br />                 
                <input  type="password" name="password" id="" required />    
                <br />    
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseAbleForm;