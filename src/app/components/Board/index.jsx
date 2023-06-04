import Word from "../Word";
import styles from './Board.module.scss';
import { useSelector } from 'react-redux';

const Board = ()=> {
    const words = useSelector((state) => state.words);
    
    return (
        <section className={styles.Board}>
            <Word word={words[0]} index={0} />
            <Word word={words[1]} index={1} />
            <Word word={words[2]} index={2} />
            <Word word={words[3]} index={3} />
            <Word word={words[4]} index={4} />
        </section>
    );
}

export default Board;
