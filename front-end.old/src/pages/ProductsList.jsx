import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import useProductsStore from
// import { getAll } from
import ProductCard from '../components/ProductCard';

function Products() {
  const array = useProductsStore((state) => state.products);
  const cart = useProductsStore((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

  const handleCheckout = () => history.push('/checkout');

  useEffect(() => {
    async function getProducts() {
      const products = await getAll();
      useProductsStore.setState({ products });
    }
    getProducts();
    setTotalPrice(cart.reduce((acc, { price, quantity }) => acc + (price * quantity), 0));
  }, [cart]);

  return (
    <div>
      <div>
        {array.map(() => (
          <ProductCard key={ Products.id } { ...product } />
        ))}
      </div>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ handleCheckout }
        disable={ createImageBitmap.length === 0 }
      >
        Carrinho: R$
        <p data-testid="customer_products_checkout-bottom-value">
          { totalPrice.toFIxed(2).toString().replace(/\./, ',')}
        </p>
      </button>
    </div>
  );
}

export default Products;
