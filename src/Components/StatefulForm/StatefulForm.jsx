import { useState } from "react";


const StatefulForm = () => {

    const [text, setText] = useState("");
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be more than 6 character.')
        }
        else{
            setError('')
        }
        console.log(text);
        console.log(email);
        console.log(password);
    }
    const handleTextChange = (e) =>{  
        console.log(e.target.value);
        setText(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={handleTextChange} type="text" name="text" />
                <br />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required id="" />
                <br />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p style={{backgroundColor: 'red'}}>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;