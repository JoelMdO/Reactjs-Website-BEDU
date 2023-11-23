import React from "react";
import LoginBackground from '../../assets/backgroundlogin.svg';
import LogoImage from '../widgets/general/image_logo';
import LoginTextField from "../widgets/login_screen/login_textfield";
import '../styles/general/background_image.css';

const LoginPage = () => {


    return (
        <>
            <LogoImage />
            <LoginTextField />
            <img className='main-page-background-login' src={LoginBackground} alt="background" />
        </>
    )

}

export default LoginPage;
