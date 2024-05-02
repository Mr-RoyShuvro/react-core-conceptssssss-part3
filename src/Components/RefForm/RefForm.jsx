import { useEffect, useRef } from "react";

const RefForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(textRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect(()=>{
        textRef.current.focus();
    },[])

    const textRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={textRef} type="text" name="text" />
                <br />
                <br />
                <input defaultValue={'sh@gmail.com'} ref={emailRef} type="email" name="email" id="" />
                <br />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;