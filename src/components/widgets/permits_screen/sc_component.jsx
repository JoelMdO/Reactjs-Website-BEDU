import React from 'react';
import '../../styles/permits_screen/Sass/main.scss';


const ScreenComponent = ({ data, keyProp, buttonClicked }) => {

    ///keyprop = country name or the table column title to retrive the component accordingly.
    ///[text] will retrieve the field which belongs to the corresponded keyprop
    const text = data.length > 0 ? data[0][keyProp] : '';
    if (!text) {

        var text2 = 'N/A please log in';
        var letters = Array.from(text2).map((char, index) => (
            <span className='letter' id={'table-cell'}>
                {char}
            </span>));
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
                data.map((item, index) => (
                    <div key={index}>
                        <div className='letters'>
                            <p>{letters}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default ScreenComponent;
