import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import welcome from '../../../assets/Welcome.svg';
import "../../styles/login_sceen/login_answer.css";
import { useDispatch } from 'react-redux';
import { getToken } from '../../../app/actions';
import { useNavigate } from "react-router-dom";

const LoginAnswer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [welcomeMessage, setWelcomeMessage] = useState('Under development');
    const username = useSelector((state) => state.user);
    const password = useSelector((state) => state.password);
    const [getData, setGetData] = useState([]);

    const url = `${process.env_REACT_APP_HOST}/login`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (username != null && password != null) {
                    const bodyLogIn = {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password }),
                    }

                    await fetch(url, bodyLogIn)
                        .then((response) => response.json())
                        .then((data) => {

                            setGetData({ jwt: data.jwt });
                        });
                    if (!getData) {
                        setWelcomeMessage("Unable to login\nPlease review your credentials");

                    } else {
                        setWelcomeMessage("Welcome back!\n\n\n\nClose the window to continue..");
                        storeToken = localStorage.setItem(getData);

                    }
                } else {
                    setWelcomeMessage("Unable to login\nPlease review your credentials");

                }
            } catch (e) {

            }
        };
        fetchData();
    }, [username, password, url]);

    const handleClose = () => {
        dispatch(getToken(storeToken));
        navigate('/permits')
    };

    return (
        <>
            <div className='welcome-frame'>
                <div className='white-square'></div>
                <img src={welcome} className="welcome" />
                <h1 className='welcome-text'>{welcomeMessage}</h1>
                <button className='welcome-button-close' onClick={handleClose}>Close</button>
            </div>
        </>
    );
}

export default LoginAnswer;

