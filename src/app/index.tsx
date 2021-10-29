import React from 'react';
import ProductsPage from '../ui/pages/ProductsPage';

import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <ProductsPage />
    </div>
  );
}

export default App;
