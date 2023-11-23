import React from 'react';
import ScreenComponent from './sc_component';
import '../../styles/permits_screen/screen_results.css';

const TableBoard = ({ data, buttonClicked }) => {
    return (
        <table className='table-board'>
            <thead>
                <div className='space-2'></div>
                <tr className='table-titles'>
                    <th>TYPE</th>
                    <div className='space'></div>
                    <th>INFORMATION</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <th className='table-row'>ICAO</th>
                    <div className='space'></div>
                    <td><ScreenComponent data={data} keyProp={"icao"} buttonClicked={buttonClicked} /></td></tr>
                <tr >
                    <th className='table-row'>IATA</th>
                    <div className='space'></div>
                    <td><ScreenComponent data={data} keyProp={"iata"} buttonClicked={buttonClicked} /></td>
                </tr>
                <tr >
                    <th className='table-row'>SLOTS</th>
                    <div className='space'></div>
                    <td><ScreenComponent data={data} keyProp={"slot"} buttonClicked={buttonClicked} /></td>
                </tr>
                <tr >
                    <th className='table-row'>RFF</th>
                    <div className='space'></div>
                    <td><ScreenComponent data={data} keyProp={"rff"} buttonClicked={buttonClicked} /></td>
                </tr>
                <tr >
                    <th className='table-row'>OPERATION TIMINGS</th>
                    <div className='space'></div>
                    <td><ScreenComponent data={data} keyProp={"ops_hours"} buttonClicked={buttonClicked} /></td>
                </tr>
                <tr>
                    <th className='table-row'>CUSTOMS</th>
                    <div className='space'></div>
                    <td><ScreenComponent data={data} keyProp={"customs"} buttonClicked={buttonClicked} /></td>
                </tr>
                <tr>
                    <th className='table-row'>ADDITIONAL INFORMATION</th>
                    <div className='space'></div>
                    <td><ScreenComponent data={data} keyProp={"additional_info"} buttonClicked={buttonClicked} /></td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableBoard;
