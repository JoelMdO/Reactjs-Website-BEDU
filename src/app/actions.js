// actions.js
export const setButtonClicked = (buttonClicked) => ({
    type: 'SET_BUTTON_CLICKED',
    payload: buttonClicked,
});

export const setType = (type) => ({
    type: 'SET_TYPE',
    payload: type,
});

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const setPassword = (password) => ({
    type: 'SET_PASSWORD',
    payload: password,
});

export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email,
});


export const setToken = (token) => ({
    type: 'GET_TOKEN',
    payload: token,
});

export const setShowScreens = (toShow) => ({
    type: 'GET_SCREENS',
    payload: toShow,
});

export const logout = (isLoginout, token) => ({
    type: 'LOGOUT',
    payload: isLoginout, token
});


