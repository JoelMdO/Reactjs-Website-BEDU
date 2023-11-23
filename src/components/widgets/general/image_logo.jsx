import React from "react";
import '../../styles/general/logo.css';

const LogoImage = ({ position }) => {

    const handleEmailButtonClick = () => {
        const subject = encodeURIComponent('Let\'s connect');
        const body = encodeURIComponent('I would like to connect:');

        const mailtoLink = `mailto:joelmontesdeoca@proton.me?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    const sideLogo = `logo-${position === 'right' ? 'right' : 'left'}`;
    return (
        <button className='logo' id={sideLogo} onClick={handleEmailButtonClick}>
            <div className='logo-tooltip'>Lets Connect
                <span className='logo-yellow'><br />Email me!</span></div>
        </button>
    )
}

export default LogoImage;