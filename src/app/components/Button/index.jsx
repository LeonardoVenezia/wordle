import styles from './Button.module.scss';

const Button = ({children, handle})=> {
    return (
        <button
            className={styles.Button}
            onClick={handle}
        >
            {children}
        </button>
    );
}

export default Button;
