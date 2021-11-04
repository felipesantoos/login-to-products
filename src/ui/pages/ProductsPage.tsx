import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImExit } from "react-icons/im";

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
    }, []);

    function redirectToProductDetails(item: Product) {
        appHistory.push(`/products/${item.id}`, item);
    }

    function logout() {
        authContext.logout();
    }

    return (
        <div className={styles.container}>
            <Button onClick={logout}>
                <ImExit />
                Logout
            </Button>
            <div className={styles.content}>
                <header>
                    <h2>Meus produtos</h2>
                </header>
                <main>
                    {productsContext.data?.map((item) => {
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
