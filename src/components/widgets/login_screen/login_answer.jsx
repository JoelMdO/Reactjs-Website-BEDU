import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import welcome from '../../../assets/Welcome.svg';
import "../../styles/login_sceen/login_answer.css";
import { useNavigate } from "react-router-dom";

const LoginAnswer = () => {

    const navigate = useNavigate();
    let storeToken = '';
    let tokenlength = '';
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const username = useSelector((state) => state.user);
    const password = useSelector((state) => state.password);
    const [getData, setGetData] = useState([]);


    // const url = 'https://nodejs-api-airportsdb.uc.r.appspot.com/login';
    const url = 'http://localhost:8080/login';

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (username != null && password != null) {
                    const bodyLogIn = {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password }),
                    }
                    const response = await fetch(url, bodyLogIn);
                    const data = await response.json()
                    setGetData(data);

                    console.log(`fetch`, fetch);
                    console.log(`data.jwt:`, data.jwt);
                    if (data.jwt != !data.jwt) {
                        setWelcomeMessage("Welcome back!\n\n\n\nClose the window to continue..");
                        console.log(`getDatatoken:`, getData.jwt)
                        localStorage.setItem('token:', JSON.stringify(data.jwt));
                        storeToken = data.jwt;
                        tokenlength = storeToken.length;
                        console.log(`length:`, tokenlength)
                        console.log(`storetoken`, storeToken);
                    }
                    if (data.message === "User or password incorrect") {
                        setWelcomeMessage("Unable to login\nPlease review your credentials");
                    } else if (!data.jwt) {
                        setWelcomeMessage(`Server Error!\n\n\n\nClose the window and try again later..`);
                    } else if (!response.ok) {
                        setWelcomeMessage(`Server Error!\n\n\n\nClose the window and try again later..`);
                    }
                } else {
                    setWelcomeMessage("Unable to login\nPlease review your credentials");
                }
            } catch (e) {
                setWelcomeMessage(`Server unavailable\n\n\n\nClose the window and try again later..`);
            }
        };
        fetchData();
    }, [username, password, url]);

    const handleClose = () => {
        if (getData.jwt) {
            navigate('/permits')
        } else {
            navigate('/')
        }
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

