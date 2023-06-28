import { useContext } from 'react';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CartContext from '../CartContext';

const Card = ({ item, showNotify }) => {
  const { id, img, alt, title, price, icon, isNew } = item;
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="product">
        {isNew && <span className="status">New</span>}

        <Link
          to={`/product/${id}`}
          onClick={() => window.top(0, 0)}
          className="preview"
        >
          <div className="overlay"></div>
          <RemoveRedEyeIcon className="eye" />
          <img src={img} alt={alt} />
        </Link>

        <div className="description">
          <div className="description-content">
            <h5 className="name">{title}</h5>
            <h4 className="price">${price}</h4>
          </div>

          <button
            onClick={() => {
              addToCart(id, img, alt, title, price);
              showNotify;
            }}
          >
            <span className="cart">{icon}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
