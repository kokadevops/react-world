import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                created by &copy; kokadevops {new Date().getFullYear()}
            </p>
        </footer>
    );
};
export default Footer;
