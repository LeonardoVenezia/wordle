import styles from './Word.module.scss';
import Letter from '../Letter';
import { useSelector } from 'react-redux';


const Word = ({ index }) => {
    const words = useSelector((state) => state.words);


    const listLetters = words[index]?.map(l => {
        return <Letter state={l.state || 'empty'}>{l.value}</Letter>;
    });

    return (
        <div className={styles.Word} >
            {listLetters}
        </div>
    );
}

export default Word;
