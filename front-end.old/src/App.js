import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/ProductsList';

function App() {
  return (
    <LoginProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route path="custumer/products" component={ Products } />
        {/* <Route path="custumer/checkout" component={ Checkout } />
        <Route path="customer/orders/:id" component={ OrderDetails } />
        <Route path="customer/orders/" component={ Orders } />
        <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
        <Route path="/seller/orders/" component={ SellerOrders } />
        <Route path="/admin/manage" component={ AdminManage } /> */}
      </Switch>
    </LoginProvider>

  );
}

export default App;
