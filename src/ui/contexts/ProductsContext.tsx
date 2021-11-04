import { createContext, ReactNode, useState } from "react";
import Product from "../../core/models/Product";

interface ProductsContextProps {
    data: undefined | Product[];
    favoritedProducts: undefined | number[];
    fetch(): void;
    favoriteProduct(id: number): void;
}

interface ProductsProviderProps {
    children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextProps);

function ProductsProvider({ children }: ProductsProviderProps) {
    const [data, setData] = useState<Product[]>();
    const [favoritedProducts, setFavoritedProducts] = useState<number[]>([]);

    function fetch() {
        setData([
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
        ]);
    }

    function favoriteProduct(id: number) {
        const exists = favoritedProducts.indexOf(id) >= 0;

        if (exists) return;

        setFavoritedProducts((state) => [...state, id]);
    }

    return (
        <ProductsContext.Provider value={
            { data, favoritedProducts, fetch, favoriteProduct }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;
