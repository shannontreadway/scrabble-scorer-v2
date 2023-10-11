"use client";
import styles from './PlayerInput.module.css'
import { useState } from 'react'

export const PlayerInput = () => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [player3, setPlayer3] = useState('');
    const [player4, setPlayer4] = useState('');

    // const updatePlayerNames = () => {
    //     setPlayer1(name1);
    //     setPlayer2(name2);
    //     setPlayer3(name3);
    //     setPlayer4(name4);
    // };

    return (
        <>
            <div className={styles.playerInput}>
                <label>Player 1</label>
                <input name='name1' id='name1' />
            </div>
            <div className={styles.playerInput}>
                <label>Player 2</label>
                <input name='name2' id='name2' />
            </div>
            <div className={styles.playerInput}>
                <label>Player 3</label>
                <input name='name3' id='name3'/>
            </div>
            <div className={styles.playerInput}>
                <label>Player 4</label>
                <input name='name4' id='name4' />
            </div>
            {/* <button type='submit' onClick={updatePlayerNames}>Start Game</button> */}
        </>
    )
}