import React, { useState } from "react";
import { setPassword, setUser } from "../../../app/actions";
import { useDispatch } from 'react-redux';
import '../../styles/login_sceen/login_screen.css';
import '../../styles/login_sceen/login_button.css';
import '../../styles/login_sceen/login_textfield.css';
import LoginAnswer from "./login_answer";

const LoginTextField = () => {

    const dispatch = useDispatch();
    const [showAnswerPage, setShowAnswerPage] = useState(false);

    const SubmitLogIn = (e) => {

        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        let userValue = formData.get("user");
        let passwordValue = formData.get("password");
        dispatch(setUser(userValue));
        dispatch(setPassword(passwordValue));
        setShowAnswerPage(true);
        console.log('User:', userValue, 'password:', passwordValue);
        passwordValue = '';
        userValue = '';
    };

    return (
        <>
            {showAnswerPage && <LoginAnswer />}
            <div className="log-in-screen-black-container">
                <form onSubmit={SubmitLogIn}>
                    <br />
                    <br />
                    <label>User:
                        <br />
                        <input className='user' name="user" cols="20" rows="1"></input></label>
                    <br />
                    <br />
                    <label>Password:
                        <br />
                        <input className='password' name="password" cols="20" rows="1"></input></label>
                    <br />
                    <br />
                    <br />
                    <button className="login-button-page" type="submit">Login</button></form>
            </div>
        </>
    )
}

export default LoginTextField;