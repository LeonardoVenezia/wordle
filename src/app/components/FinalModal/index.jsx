import { useSelector, useDispatch } from "react-redux";
import styles from './FinalModal.module.scss';
import Button from "../Button";
import { closeStatistics } from "@/app/store/reducers";

const FinalModal = () => {
    const victory = useSelector((state) => state.victoryModal);
    const defeat = useSelector((state) => state.defeatModal);
    const plays = useSelector((state) => state.plays);
    const victories = useSelector((state) => state.victories);
    const statistics = useSelector((state) => state.statistics);
    const dispatch = useDispatch();

    if (!victory & !defeat && !statistics) return null;

    const close = ()=> {
        dispatch(closeStatistics());
    };

    return (
        <section className={styles.FinalModal}>
            <div className={styles.content}>
                <h1 className={styles.title}>Estadísticas</h1>
                <div className={styles.numbers}>
                    <div>
                        <p className={styles.data}>{plays}</p>
                        <p className={styles.description}>Jugadas</p>
                    </div>
                    <div>
                        <p className={styles.data}>{victories}</p>
                        <p className={styles.description}>Victorias</p>
                    </div>
                </div>
                <div className={styles.next}>
                    <p>Siguiente Palabra</p>
                    <p className={styles.time}>04:10</p>
                </div>
                <div className={styles.button}>
                    <Button handle={close}>Aceptar</Button>
                </div>
            </div>
        </section>
    );
}

export default FinalModal;
