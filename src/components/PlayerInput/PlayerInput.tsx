import styles from './PlayerInput.module.css'

export const PlayerInput = () => {
    // setNumber might need to be added as a parameter to this function - was removed to try to get a successful build.
    // const onClick = (value: number) => {
    //     setNumber(value);
    // }
    return (
        <>
            <p className={styles.p}>How many people will be playing the game?</p>
            <div className={styles.form}>
                <div>
                    <input type="radio" id="2" name="num_players" value={2} />
                    <label htmlFor="2" className={styles.label}>Two</label>
                </div>
                <div>
                    <input type="radio" id="3" name="num_players" value={3} />
                    <label htmlFor="3" className={styles.label}>Three</label>
                </div>
                <div>
                    <input type="radio" id="4" name="num_players" value={4} />
                    <label htmlFor="4" className={styles.label}>Four</label>
                </div>
                <button className={styles.submit}>Start Game</button>
            </div>
        </>
      );
}