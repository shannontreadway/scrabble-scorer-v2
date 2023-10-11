import styles from './page.module.css'
import { PlayerInput } from '@/components/PlayerInput/PlayerInput'

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
          <li>
            There is space for four players. Enter each player's name in the boxes
            provided.
          </li>
          <li>
            Each player has a place to input words, words to be scored, and a
            checkbox.
          </li>
          <li>
            The <u>checkbox</u> is for if you use all 7 tiles in your turn. When
            this happens, check the box and you will receive a 75 point bonus.
          </li>
          <li>
            The <u>your word</u> box is for you to enter the word as you would like
            it to appear in the table of plays below. You may use any character you
            wish for blank tiles.
          </li>
          <li>
            The <u>word to score</u> box is for you to input the words taking into
            account bonus tiles. For example, if you play the word "bat" and the "b"
            is on the double letter square, type "bbat." In this box, SKIP blank
            tiles.
          </li>
          <li>
            Along the same lines, if you play a tile on a double or triple word
            square, repeat the word that many times. For example, if you play the
            word "bat" and any of the tiles land on a double word square, type
            "batbat."
          </li>
          <li>
            At times, you might end up playing tiles in such a way that you are
            forming multiple words. For instance, you might play a "b" before the
            word "at" to form "bat" then continue your play to form the word "brad."
            In such instances, you can either play the words as different words
            ("bat" AND "brad") or all as 1 word ("batbrad").
          </li>
          <li>
            After playing the game, if you are interested in playing another one
            immediately, refresh the page and it will clear the page.
          </li>
        </ul>
      </div>
      <PlayerInput />
    </main>
  )
}
