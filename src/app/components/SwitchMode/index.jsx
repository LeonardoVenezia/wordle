import styles from './SwitchMode.module.scss';
import { toggleNight } from '@/app/store/reducers';
import { useDispatch, useSelector } from 'react-redux';

const SwitchMode = ()=> {
    const dispatch = useDispatch();
    const night = useSelector((state) => state.night);

    const setNight = ()=> {
        dispatch(toggleNight());
    }

    return (
        <button
            onClick={setNight}
            className={`${styles.SwitchMode} ${night && styles.nightBackround}`}
        >
            <div className={`${styles.ball} ${night && styles.night}`} />
        </button>
    );
}

export default SwitchMode;
