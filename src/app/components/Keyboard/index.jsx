import Letter from "../Letter";
import Image from "next/image";
import styles from './Keyboard.module.scss';
import { addLetter } from "@/app/store/reducers";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'];
const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const Keyboard = () => {
    const dispatch = useDispatch();
    const createRow = row => row.map(r => {
        return (
            <div onClick={() => dispatch(addLetter(r))}>
                <Letter little>{r}</Letter>
            </div>
        );
    });

    useEffect(() => {
        function handleKeyDown(event) {
          const { key } = event;
          if (key.length !== 1) return;
          dispatch(addLetter(key));
        }
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return (
        <section className={styles.Keyboard}>
            <div className={`${styles.row} ${styles.one}`}>
                {createRow(row1)}
            </div>
            <div className={`${styles.row} ${styles.two}`}>
                {createRow(row2)}
            </div>
            <div className={`${styles.row} ${styles.three}`}>
                <button className={styles.button}>ENTER</button>
                {createRow(row3)}
                <button className={styles.button}>
                    <Image width={22} height={16} src="./icons/delete.svg" />
                </button>
            </div>
        </section>
    );
}

export default Keyboard;
