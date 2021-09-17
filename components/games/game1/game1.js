import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import styles from './game1.module.scss'
import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';

import Block from './Block'

export default function Game1Page() {
    const [timerCondition, setTimerCondition] = useState('stop');
    const [timerTime, setTimerTime] = useState('00:00:00');

    const [openedCards, setOpenedCards] = useState(0);
    const cardsContent   = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    const cardBlocks = mixarr(cardsContent).map((number, index) =>
        <Block
            changeStatus={test}
            getStatus={getStatus}
            content={number}
            status="closed"
            key={index + new Date()}
        />
    );

    function getStatus(status) {
        console.log(status);
    }

    function test() {
        setOpenedCards(openedCards + 1);
    }

    function mixarr(arr) {
        return arr.map(i => [Math.random(), i]).sort().map(i => i[1])
    }


    return (
        <>
            <Timer timerCondition={timerCondition} getTime={setTimerTime}/>

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
        
            <div>Открытых карт: {openedCards}</div>
            <div className={styles.field}>{cardBlocks}</div>
        </>
    )
}