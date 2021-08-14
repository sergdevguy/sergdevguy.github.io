import React, { useState, useEffect } from 'react';
import useInterval from '../components/UseInterval';

export default function Timer(props) {
    const [time, setTime] = useState('00:00:00');
    const defaultTimerSpeed = 10;
    let timerSpeed = null;
    const updateTimerTime = props.updateTimerTime;
    let test = props.timerCondition;

    switch (props.timerCondition) {
        case 'start':
            timerSpeed = defaultTimerSpeed;
            break;
        case 'stop':
            timerSpeed = null;
            break;
        case 'getTime':
            // updateTimerTime(time);
            break;
    }

    if (test === "getTime") {
        updateTimerTime(time);
    }

    useInterval(() => {
        setTime(updateTime());
    }, timerSpeed);

    function doubleNumber(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

    function updateTime() {
        let minutes = time.slice(0, 2);
        let seconds = time.slice(3, 5);
        let milliseconds = time.slice(6);

        if (milliseconds >= 99) {
            milliseconds = '00';
            seconds++;
            seconds = doubleNumber(seconds);
        }
        if (seconds === 60) {
            seconds = '00';
            minutes++;
            minutes = doubleNumber(minutes);
        }
      
        milliseconds++;
        milliseconds = doubleNumber(milliseconds);
      
        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <>
            <div className="timer">
                <div className="timer__container">
                    <span>Время:{' '}</span>
                    <span>{time}</span>
                </div>
            </div>
            <button onClick={() => {
                updateTimerTime(time);
            }}>
                Child Get timer time
            </button>
        </>
    )

}