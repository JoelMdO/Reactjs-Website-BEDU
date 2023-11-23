import React, { useState } from "react";
import { setPassword, setUser, setEmail } from "../../../app/actions";
import { useDispatch } from 'react-redux';
import '../../styles/signup_sceen/signup_screen.css';
import '../../styles/signup_sceen/signup_button.css';
import '../../styles/signup_sceen/signup_textfield.css';
import SignupAnswer from './signup_answer';

const SignupTextField = () => {

    const dispatch = useDispatch();
    const [showAnswerPage, setShowAnswerPage] = useState(false);

    const SubmitSignup = (e) => {

        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        let userValue = formData.get("user");
        let passwordValue = formData.get("password");
        let emailValue = formData.get("email")
        dispatch(setUser(userValue));
        dispatch(setPassword(passwordValue));
        dispatch(setEmail(emailValue));
        setShowAnswerPage(true);
    };

    return (
        <>
            {showAnswerPage && <SignupAnswer />}
            <div className="signup-screen-black-container">
                <form onSubmit={SubmitSignup}>
                    <br />
                    <br />
                    <label>User:
                        <br />
                        <input className='user' name="user" cols="20" rows="1"></input></label>
                    <br />
                    <br />
                    <br />
                    <label>email:
                        <br />
                        <input className='email' name="email" cols="20" rows="1"></input></label>
                    <br />
                    <br />
                    <br />
                    <br />
                    <label>Password:
                        <br />
                        <input className='password' name="password" cols="20" rows="1"></input></label>
                    <br />
                    <br />
                    <br />
                    <button className="signup-button-page" type="submit">Sign Up</button></form>
            </div>
        </>
    )
}

export default SignupTextField;