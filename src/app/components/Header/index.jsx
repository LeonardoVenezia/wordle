import styles from './Header.module.scss';
import SwitchMode from '../SwitchMode';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { openStatistics } from '@/app/store/reducers';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <header className={styles.header}>
            <Image width={40} height={30} src="./icons/question.svg" />
            <h1>WORDLE</h1>
            <div className={styles.switchContainer}>
                <Image
                    onClick={() => dispatch(openStatistics())}
                    width={30}
                    height={30}
                    src="./icons/chart.svg"
                />
                <SwitchMode />
            </div>
        </header>
    );
}

export default Header;
