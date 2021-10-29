import { AiOutlineInfoCircle } from "react-icons/ai";

import Button from "../components/Button";
import styles from "../styles/pages/ProductsPage.module.scss";

function ProductsPage() {
    const products = [
        {
            name: "Feijão",
            value: 3,
        },
        {
            name: "Arroz",
            value: 5,
        },
        {
            name: "Macarrão",
            value: 3,
        },
        {
            name: "Carne",
            value: 20,
        },
        {
            name: "Danone",
            value: 3.50,
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <header>
                    <h2>Meus produtos</h2>
                </header>
                <main>
                    {products.map((item) => {
                        return (
                            <div className={styles.card}>
                                <h3>{item.name}</h3>
                                <span>Valor: {item.value}</span>
                                <Button>
                                    <AiOutlineInfoCircle />
                                    Ver detalhes
                                </Button>
                            </div>
                        );
                    })}
                </main>
            </div>
        </div>
    );
}

export default ProductsPage;
