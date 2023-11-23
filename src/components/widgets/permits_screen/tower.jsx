import React, { useState, useEffect } from 'react';
import '../../styles/permits_screen/twr_button.css';
import { useDispatch } from 'react-redux';
import { setButtonClicked, setType } from '../../../app/actions';
import ScreenResults from './screen_results';

const Tower = ({ type }) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [towerShow, setTowerShow] = useState(true);

    const handleClick = () => {
        dispatch(setButtonClicked(true));
        dispatch(setType(type));
        setShow(true);
        setTowerShow(false);
    };



    return (
        <>
            {show && <ScreenResults />}
            <button className='tower-button' id={type} onClick={handleClick}>
                <div className='tower-window'></div>
                <div className='tooltip'>{type}
                    <span className='yellow'><br />Click for Info</span></div>
            </button>
        </>
    );
}

export default Tower;

