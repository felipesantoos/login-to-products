import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { ProductsContext } from "../contexts/ProductsContext";

import Button from "../components/Button";
import Product from "../../core/models/Product";

import styles from "../styles/pages/ProductDetaisPage.module.scss"
import LoginPage from "./LoginPage";

function ProductDetaisPage() {
    const appHistory = useHistory();
    const product = appHistory.location.state as Product;
    const productsContext = useContext(ProductsContext);

    if (!product) return (<LoginPage />);

    let favoriteComponent;

    function handleFavoriteProduct() {
        productsContext.favoriteProduct(product.id);
    }


    if (productsContext.favoritedProducts) {
        if (productsContext.favoritedProducts.indexOf(product.id) >= 0) {
            favoriteComponent = (
                <AiFillHeart
                    className={styles.aiFillHeart}
                    onClick={() => handleFavoriteProduct()}
                />
            );
        } else {
            favoriteComponent = (
                <AiOutlineHeart onClick={() => handleFavoriteProduct()} />
            );
        }
    }

    return (
        <div className={styles.container}>
            <Button onClick={appHistory.goBack}>
                < IoArrowBack />
                Voltar
            </Button>
            <div className={styles.content}>
                <div className={styles.favoriteAction}>
                    {favoriteComponent}
                </div>
                <h1>{product.name}</h1>
                <span>Valor: {product.value}</span>
            </div>
        </div>
    );
}

export default ProductDetaisPage;
