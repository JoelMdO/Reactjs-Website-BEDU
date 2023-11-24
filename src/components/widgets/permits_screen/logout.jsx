import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../app/actions";
import '../../styles/permits_screen/logout_button.css';

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        dispatch(logout(true, null));
        localStorage.clear();
    }

    return (
        <>
            <button className='blue-airplane-button' onClick={handleClick}>
                <div className='blue-airplane-tooltip'>Logout<br />
                    <span className='blue-airplane-yellow'>Click</span></div>
            </button>
        </>
    )
}

export default Logout;