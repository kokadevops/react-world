import Nav from "../components/Nav";
import styles from "./Product.module.css";

export default function Product() {
    return (
        <main className={styles.product}>
            <Nav />
            <section>
                <img src="img-1.jpg" alt="boat" />
                <div>
                    <h2>About World</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo est dicta illum vero culpa cum quaerat architecto
                        sapiente eius non soluta, molestiae nihil laborum,
                        placeat debitis, laboriosam at fuga perspiciatis?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Corporis doloribus libero sunt expedita ratione
                        iusto, magni, id sapiente sequi officiis et.
                    </p>
                </div>
            </section>
        </main>
    );
}
