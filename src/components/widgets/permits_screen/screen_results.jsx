import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ScreenComponent from './sc_component';
import takeoff from '../../../assets/takeofficon.svg';
import '../../styles/permits_screen/screen_results.css';
import TableBoard from './table_board';
import Clock from './clock';


const ScreenResults = () => {

    ///obtain data from store (type = country, signin details)
    const finalbuttonClicked = useSelector((state) => state.buttonClicked);
    const finaltype = useSelector((state) => state.type);
    const storetoken = useSelector((state) => state.token);
    const finaltoken = storetoken.jwt;
    const [showScreen, setShowScreen] = useState([true]);
    const [getData, setGetData] = useState([]);
    //aiport selection as per country type 
    switch (finaltype) {
        case 'Argentina':
            var airport = 'SAEZ';
            break;
        case 'Canada':
            var airport = 'CYYZ';
            break;
        case 'China':
            var airport = 'ZBAA';
            break;
        case 'France':
            var airport = 'LFPG';
            break;
        case 'India':
            var airport = 'VIDP';
            break;
        case 'Mexico':
            var airport = 'MMMX';
            break;
        case 'Morocco':
            var airport = 'GMMX';
            break;
        case 'Russia':
            var airport = 'UWWW';
            break;
        default:
            var airport = '';
            break;
    }
    const url = `${process.env.REACT_APP_HOST}/airport/${airport}`;

    useEffect(async () => {
        if (finalbuttonClicked && finaltype && finaltoken) {
            const token = {
                method: "GET",
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${finaltoken}` },
            }

            await fetch(url, token)
                .then((response) => response.json())
                .then((data) => {

                    setGetData(data);
                })
                .catch((e) => {

                });

        } else {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {

                    setGetData(data);
                })
                .catch((e) => {

                });
        }
    }, [finalbuttonClicked, finaltype, url]);



    const handleClose = () => {
        setShowScreen(false);
    };

    return (
        <>
            {showScreen && (
                <div className='frame'>
                    <img src={takeoff} className="takeofficon" />
                    <ScreenComponent data={getData} keyProp={"country_name"} buttonClicked={finalbuttonClicked} />
                    <Clock />
                    <div className='space-1'></div>
                    <TableBoard data={getData} buttonClicked={finalbuttonClicked} />
                    <button className='button-close' onClick={handleClose}>Close</button>
                </div>
            )}
        </>
    );
}

export default ScreenResults;
