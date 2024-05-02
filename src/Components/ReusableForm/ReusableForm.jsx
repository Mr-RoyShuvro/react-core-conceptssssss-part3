

const ReusableForm = ({formTitle, handleSubmit, btn = 'Submit', children}) => {

    const handleLocalSubmit = (e) =>{
        e.preventDefault();
        const data = {
                name: e.target.name.value,
                email: e.target.email.value,
                number: e.target.number.value
        }
        handleSubmit(data);
    }


    return (
        <div>
            
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="text"/>
                <br />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <br />
                <input type="number" name="number" id="" />
                <br />
                <br />
                <input type="submit" value={btn} />
            </form>
        </div>
    );
};

export default ReusableForm;