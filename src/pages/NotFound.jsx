import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <main className={styles.notFound}>
            <Nav />
            <section>
                <h4>Sorry, page not found</h4>
            </section>
        </main>
    );
}
