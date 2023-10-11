"use client"
import styles from './PlayerTile.module.css';
import { useState } from 'react';

interface IPlayerTile {
    playerName: string
}

export const PlayerTile = ({playerName}: IPlayerTile) => {
    const [playerScore, setPlayerScore] = useState(0);
    const [lastWord, setLastWord] = useState(0);

    const scoreThisWord = () => {
        console.log('score word');
    }

    return (
        <div className={styles.tile}>
            <h3>{playerName}</h3>
            <h4>Total score: {playerScore} points</h4>
            <h4>Last word score: {lastWord} points</h4>
            <div className={styles.form}>
                <div className={styles.formSection}>
                    <label htmlFor='word'>Word</label>
                    <input id='word' />
                </div>
                <div className={styles.formSection}>
                    <label htmlFor='bonusWord'>Bonus word</label>
                    <input id='bonusWord' />
                </div>
                <div className={styles.formSection}>
                    <label htmlFor='multipleLetters'>Multiple score letters</label>
                    <input id='multipleLetters' />
                </div>
                <div className={styles.formSection}>
                    <label htmlFor='blank'>Blank used for letter</label>
                    <input id='blank' />
                </div>
                <div className={styles.formSection}>
                    <label htmlFor='allTiles'>All tiles used</label>
                    <input type='checkbox' id='allTiles' />
                </div>
                <div className={styles.formSection}>
                    <label htmlFor='doubleWord'>Double word</label>
                    <input type='checkbox' id='doubleWord' />
                </div>
                <div className={styles.formSection}>
                    <label htmlFor='tripleWord'>Triple word</label>
                    <input type='checkbox' id='tripleWord' />
                </div>
                <button onClick={scoreThisWord}>Score Word</button>
            </div>
        </div>
    )
};