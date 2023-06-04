import Word from "../Word";
import styles from './Modal.module.scss';
import { updateLetter, updateWord } from '@/app/store/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';

const STATES = {
    right: 'right',
    rightBut: 'rightBut',
    incorrect: 'incorrect',
}
const mock = ["gatos", "vocal", "canto"];
const expectedMock = [
    {
        wordIndex: 0,
        letterIndex: 0,
        letterState: STATES.right,
    },
    {
        wordIndex: 1,
        letterIndex: 2,
        letterState: STATES.rightBut,
    },

    {
        wordIndex: 2,
        letterIndex: 4,
        letterState: STATES.incorrect,
    },
]

const Modal = ({ open, close }) => {
    const dispatch = useDispatch();
    const words = useSelector((state) => state.words);
    useEffect(() => {
        if (!open) return;
        if (words[2][4].state) return;
        mock.forEach((e, index) => {
            dispatch(updateWord({ word: e, index }));
        });
        expectedMock.forEach(e => {
            const { wordIndex, letterIndex, letterState } = e;
            dispatch(updateLetter({ wordIndex, letterIndex, letterState }));
        });
    }, [words]);

    const closeModal = () => {
        localStorage.setItem('itsNotTheFirstTime', 'true');
        close();
    }

    if (!open) return;

    return (
        <section className={styles.Modal}>
            <div className={styles.content}>
                <h1 className={styles.title}>Cómo jugar</h1>
                <div className={styles.texts}>
                    <p className={styles.text}>Adivina la palabra oculta en cinco intentos.</p>
                    <p className={styles.text}>Cada intento debe ser una palabra válida de 5 letras.</p>
                    <p className={styles.text}>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
                </div>
                <h2 className={styles.subtitle}>Ejemplos</h2>
                <div>
                    <Word word={words[0]} index={0} />
                    <p className={styles.rule}>La letra <span className={styles.bold}>G</span> está en la palabra y en la posición correcta.</p>
                    <Word word={words[1]} index={1} />
                    <p className={styles.rule}>La letra <span className={styles.bold}>C</span> está en la palabra pero en la posición incorrecta.</p>
                    <Word word={words[2]} index={2} />
                    <p className={styles.rule}>La letra <span className={styles.bold}>O</span> no está en la palabra.</p>
                </div>
                <p className={styles.rule}>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
                <p>¡Una palabra nueva cada 5 minutos!</p>
                <div className={styles.buttonContainer}>
                    <Button handle={closeModal}>!JUGAR¡</Button>
                </div>
            </div>
        </section>
    );
}

export default Modal;
