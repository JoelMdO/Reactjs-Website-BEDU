import React from 'react';
import '../../styles/general/title.css'

const Title = ({ position }) => {
    const sideTitle = `title-container-${position === 'right' ? 'right' : 'left'}`;
    return (
        <div className={sideTitle}>
            <h1 className='title-text'>
                World Flight Permits
            </h1>
        </div>
    );
}

export default Title;