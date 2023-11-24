import React from 'react';
import '../../styles/permits_screen/main.css';


const ScreenComponent = ({ data, keyProp, buttonClicked }) => {

    ///keyprop = country name or the table column title to retrive the component accordingly.
    ///[text] will retrieve the field which belongs to the corresponded keyprop
    console.log(`screenComponent`, data);
    const text = data.length > 0 ? data[0][keyProp] : '';
    console.log(`screenComponent:`, text);
    if (!text && !data[0]?.icao) {
        var text2 = "Server not Connected";
        var letters = Array.from(text2).map((char, index) => (
            <span key={index} className='letter' id={'table-cell'}>
                {char}
            </span>
        ));
    } else if (!text && data[0]?.icao !== null) {
        var text2 = "N/A Please login";
        var letters = Array.from(text2).map((char, index) => (
            <span key={index} className='letter' id={'table-cell'}>
                {char}
            </span>
        ));
    } else if (keyProp === 'country_name') {
        var pName = true;
        var letters = Array.from(text).map((char, index) => (
            <span key={index} className='letter' id='country_name'>
                {char}
            </span>
        ));
    } else {
        var pName = false;
        var letters = Array.from(text).map((char, index) => (
            <span key={index} className='letter' id={`${pName ? 'country_name' : 'table-cell'}`}>
                {char}
            </span>
        ));
    };


    return (
        <div className={`wrapper ${buttonClicked ? 'animate' : ''}`}
            id={`${pName ? 'country_name' : 'table-cell'}`}>
            {buttonClicked ? (
                <div className='letters'>
                    <p>{letters}</p>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default ScreenComponent;
