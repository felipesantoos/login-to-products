import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../ui/pages/LoginPage';
import ProductsPage from '../ui/pages/ProductsPage';
import Error404Page from '../ui/pages/Error404Page';
import ProductDetaisPage from '../ui/pages/ProductDetailsPage';
import AuthProvider from '../ui/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/products" exact render={() => <ProductsPage />} />
          <Route path="/products/:id" render={() => <ProductDetaisPage />} />

          <Redirect from="/" exact to="/login" />

          <Route path="/*" render={() => <Error404Page />} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
