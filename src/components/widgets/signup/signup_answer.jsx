import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import welcome from '../../../assets/Welcome.svg';
import "../../styles/signup_sceen/signup_answer.css";
import { useNavigate } from "react-router-dom";

const SignupAnswer = () => {

    const navigate = useNavigate();
    const [welcomeMessage, setWelcomeMessage] = useState('Please signup');
    const username = useSelector((state) => state.user);
    const password = useSelector((state) => state.password);
    const email = useSelector((state) => state.email);

    const [getData, setGetData] = useState([]);

    const url = `${process.env.REACT_APP_HOST}/createUser`;


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (username != null && password != null) {
                    const bodyLogIn = {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password, email }),
                    }

                    await fetch(url, bodyLogIn)
                        .then((response) => response.json())
                        .then((data) => {

                            setGetData(data);
                        })
                        .catch((error) => {
                            if (getData.message == "Please review the 3 fields are inserted correctly") {
                                setWelcomeMessage("Please review if the 3 fields\nare inserted correctly");

                            }
                        });

                    if (getData.message == "Succesfully Created") {
                        setWelcomeMessage("Welcome to the Club!\n\n\n\nClose the window to continue..");

                    }
                } else {
                    setWelcomeMessage("Unable to Signup!\n\n\n\nTry again later..");

                }
            } catch (e) {

            }
        };
        fetchData();
    }, [username, password, email, url]);

    const handleClose = () => {
        navigate('/login')
    };


    return (
        <>
            <div className='welcome-signup-frame'>
                <div className='white-signup-square'></div>
                <img src={welcome} className="welcome-signup" />
                <h1 className='welcome-signup-text'>{welcomeMessage}</h1>
                <button className='welcome-signup-button-close' onClick={handleClose}>Close</button>
            </div>
        </>
    );
}

export default SignupAnswer;

