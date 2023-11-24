import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    buttonClicked: false,
    type: null,
    user: null,
    password: null,
    email: null,
    token: null,
    toShow: true,
    isLoginout: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BUTTON_CLICKED':
            return { ...state, buttonClicked: action.payload };
        case 'SET_TYPE':
            return { ...state, type: action.payload };
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_TOKEN':
            return { ...state, token: action.payload };
        case 'GET_SCREENS':
            return { ...state, toShow: action.payload };
        case 'LOGOUT':
            return { ...state, isLoginout: action.payload, token: action.payload };
        default:
            return state;
    }
};

const store = configureStore({ reducer: reducer });

export default store;