import styles from './Letter.module.scss';

const Letter = ({ children, state, little }) => {
    return (
        <div className={`${styles.Letter} ${styles[state]} ${little && styles.little}`} >
            <span className={styles.content} >
                {children}
            </span>
        </div>
    );
}

export default Letter;
