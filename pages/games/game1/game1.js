import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import styles from './game1.module.scss'
import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';

export default function Game1Page() {
    const [timerCondition, setTimerCondition] = useState('stop');
    const [timerTime, setTimerTime] = useState('00:00:00');

    return (
        <>
            <Timer timerCondition={timerCondition} updateTimerTime={setTimerTime} />

            <div>Current time is {timerTime}</div>

            <button onClick={() => {
                setTimerCondition('start');
            }}>
                Start timer
            </button>
            <button onClick={() => {
                setTimerCondition('stop');
            }}>
                Stop timer
            </button>
            <button onClick={() => {
                setTimerCondition('getTime');
            }}>
                Get timer time
            </button>
        </>
    )
}