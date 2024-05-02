import useInputState from "../../hooks/useInputState";

const CustomHook = () => {

    // const [name, handleNameChange] = useInputState('Rojoni Kanto');

    const emailState = useInputState('sr@gmai.com')
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="text" /> */}
                <br />
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHook;