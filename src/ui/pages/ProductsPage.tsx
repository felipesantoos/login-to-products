import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { AuthContext } from "../contexts/AuthContext";
import { ProductsContext } from "../contexts/ProductsContext";

import Product from "../../core/models/Product";

import Button from "../components/Button";

import styles from "../styles/pages/ProductsPage.module.scss";

function ProductsPage() {
    const appHistory = useHistory();
    const authContext = useContext(AuthContext);
    const productsContext = useContext(ProductsContext);

    useEffect(() => {
        productsContext.fetch();
        // eslint-disable-next-line
    }, []);

    function redirectToProductDetails(item: Product) {
        appHistory.push(`/products/${item.id}`, item);
    }

    function handleFavoriteProduct(item: Product) {
        productsContext.favoriteProduct(item.id);
    }

    return (
        <div className={styles.container}>
            <Button onClick={authContext.logout}>
                <ImExit />
                Logout
            </Button>
            <div className={styles.content}>
                <header>
                    <h2>Meus produtos</h2>
                </header>
                <main>
                    {productsContext.data?.map((item) => {
                        const exists = (productsContext.favoritedProducts?.indexOf(item.id) ?? -1) >= 0;

                        let favoriteComponent;

                        if (exists) {
                            favoriteComponent = (
                                <AiFillHeart className={styles.aiFillHeart}
                                    onClick={() => handleFavoriteProduct(item)}
                                />
                            );
                        } else {
                            favoriteComponent = (
                                <AiOutlineHeart
                                    onClick={() => handleFavoriteProduct(item)}
                                />
                            );
                        }

                        return (
                            <div key={item.id} className={styles.card}>
                                <div className={styles.favoriteAction}>
                                    {favoriteComponent}
                                </div>
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
