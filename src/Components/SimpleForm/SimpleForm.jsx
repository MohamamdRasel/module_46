
const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();           // এটি use করলে form এর page reload হবে না ।
        console.log('form submitted')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
                <input type="button" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;