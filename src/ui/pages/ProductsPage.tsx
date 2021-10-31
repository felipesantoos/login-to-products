import { AiOutlineInfoCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Product from "../../core/models/Product";

import Button from "../components/Button";
import styles from "../styles/pages/ProductsPage.module.scss";

function ProductsPage() {
    const appHistory = useHistory();

    const products: Product[] = [
        {
            id: 1,
            name: "Feijão",
            value: 3,
        },
        {
            id: 2,
            name: "Arroz",
            value: 5,
        },
        {
            id: 3,
            name: "Macarrão",
            value: 3,
        },
        {
            id: 4,
            name: "Carne",
            value: 20,
        },
        {
            id: 5,
            name: "Danone",
            value: 3.50,
        },
    ];

    function redirectToProductDetails(item: Product) {
        appHistory.push(`/products/${item.id}`, item);
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <header>
                    <h2>Meus produtos</h2>
                </header>
                <main>
                    {products.map((item) => {
                        return (
                            <div key={item.id} className={styles.card}>
                                <h3>{item.name}</h3>
                                <span>Valor: {item.value}</span>
                                <Button onClick={() => redirectToProductDetails(item)}>
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
