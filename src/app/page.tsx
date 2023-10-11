// "use client";
import { useState } from 'react';
import styles from './page.module.css'
import { PlayerInput } from '@/components/PlayerInput/PlayerInput'
import { PlayerTile } from '@/components/PlayerTile/PlayerTile';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Shannon's Scrabble Scoring Website!</h1>
      <div className={styles.description}>
        <p>
        This page is to assist in scoring your Scrabble game. Here are some useful
        instructions:
        </p>
        <ul>
          {/* <li>
            There is space for four players. Enter each player's name in the boxes
            provided.
          </li> */}
          <li>
            Each player has a place to input words, bonus words, multiple scoring letters, and blank tile used for a letter.  Also, there are checkboxes for if you used all your tiles, played on a double word square, and played on a triple word square.
          </li>
          {/* <li>
            The <u>your word</u> box is for you to enter the word as you would like
            it to appear in the table of plays below. You may use any character you
            wish for blank tiles.
          </li> */}
          <li>
            The Word box is for you to enter the word you played.  If you play a blank tile, you can either skip that letter in the word, or put that letter into the 'Blank used for letter' input.
          </li>
          <li>
            At times, you might end up playing tiles in such a way that you are
            forming multiple words. For instance, you might play a "b" before the
            word "at" to form "bat" then continue your play to form the word "brad."
            In such instances, you can put the bonus word 'bat' in the bonus word input.
          </li>
          <li>
            If you use all 7 tiles in your turn mark the 'All tiles used' checkbox and you will receive a 75 point bonus.
          </li>
          <li>
            Along the same lines, if you play a tile on a double or triple word
            square, mark those boxes
          </li>
          <li>
            After playing the game, if you are interested in playing another one
            immediately, refresh the page and it will clear the page.
          </li>
        </ul>
      </div>
      <PlayerTile playerName='Player 1'/>
    </main>
  )
}
