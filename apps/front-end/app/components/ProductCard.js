import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import useProductStore from

function ProductCard({ id, name, price, urlImage }) {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useProductStore(() => []);

  const handleQuantity = (value) => {
    const re = /[0-9]+/g;
    const qtt = +value;
    if (!re.test(qtt)) return;
    const product = { id, name, price, urlImage, quantity: qtt };
    setQuantity(qtt);
    if (qtt <= 0) {
      setCart([...cart.filter((item) => item.id !== id)]);
      return;
    }
    setCart([...cart.filter((item) => item.id !== id), { ...product }]);
  };

  const handleChange = ({ target: { value } }) => handleQuantity(value);
  const handleIcrement = () => handleQuantity(quantity + 1);
  const handleDecrement = () => (quantity > 0 && handleQuantity(quantity - 1));

  return (
    <div>
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <div>
        <h3 data-testid={ `customer_products__element-card-title-${id}` }>{ name }</h3>
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price.replace(/\./, ',') }
        </p>
        <div>
          <button
            type="button"
            onClick={ handleDecrement }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>
          <input
            onChange={ handleChange }
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <button
            type="button"
            onClick={ handleIcrement }
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}.isRequired;

export default ProductCard;
