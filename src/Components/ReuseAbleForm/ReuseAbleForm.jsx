
const ReuseAbleForm = ({formTitle, handleSubmit, submitBtnText ='Submit'}) => {
   


    return (
        <div>
            <h2>{formTitle}</h2>
             <form onSubmit={handleSubmit}>
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