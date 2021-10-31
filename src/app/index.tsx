import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../ui/pages/LoginPage';
import ProductsPage from '../ui/pages/ProductsPage';
import Error404Page from '../ui/pages/Error404Page';
import ProductDetaisPage from '../ui/pages/ProductDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/products" exact render={() => <ProductsPage />} />
        <Route path="/products/:id" render={() => <ProductDetaisPage />} />
        <Route path="/*" render={() => <Error404Page />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
