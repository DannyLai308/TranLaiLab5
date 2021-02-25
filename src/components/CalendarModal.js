import React, {useState} from 'react';
import './CalendarModal.css';
import ReactDom from 'react-dom';

export default function CalendarModal({show, children, notShow}) {
    if(!show) return null

    return ReactDom.createPortal(
        <>
        <div className="overlay"></div>
        <div className="calendar-style">
            {children}

            <div className="footer-Close">
                <button onClick={notShow}>Close</button>
            </div>
        </div>
        </>,
        document.getElementById('calendarPortal')
    )
}