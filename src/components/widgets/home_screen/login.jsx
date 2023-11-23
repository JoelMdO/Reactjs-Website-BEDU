import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/home_screen/login.css';
import '../../styles/home_screen/login_buttons.css';
import '../../styles/home_screen/blue_airplane.css';
import blueairplane from '../../../assets/blueairplane.svg';

const Login = () => {

    const navigate = useNavigate();
    const tryFreeToPermitsSCreen = () => {
        navigate('/permits')
    };

    const signupToSignupScreen = () => {
        navigate('/signup')
    };

    const loginToLoginScreen = () => {
        navigate('/login')
    };

    return (
        <div className="log-in-black-container">
            <img className="blue-airplane" src={blueairplane} alt="blueairplane" />
            <button className="try-free-button" onClick={tryFreeToPermitsSCreen}>Try Free</button>
            <button className="sign-up-button" onClick={signupToSignupScreen}>Sign up</button>
            <button className="login-button" onClick={loginToLoginScreen}>Log in</button>
        </div>
    );
}

export default Login;