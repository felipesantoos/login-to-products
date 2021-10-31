import { useHistory } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import Button from "../components/Button";
import Product from "../../core/models/Product";

import styles from "../styles/pages/ProductDetaisPage.module.scss";

function ProductDetaisPage() {
    const appHistory = useHistory();
    const product = appHistory.location.state as Product;

    return (
        <div className={styles.container}>
            <Button onClick={appHistory.goBack}>
                < IoArrowBack />
                Voltar
            </Button>
            <div className={styles.content}>
                <h1>{product.name}</h1>
                <span>Valor: {product.value}</span>
            </div>
        </div>
    );
}

export default ProductDetaisPage;
