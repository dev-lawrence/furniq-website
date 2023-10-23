import { useContext } from 'react';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CartContext from '../CartContext';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Card = ({ product, showNotify }) => {
  const { name, isNew, price, image } = product;

  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="product">
        {isNew && <span className="status">New</span>}

        <Link
          to={`/product/${product._id}`}
          onClick={() => window.scrollTo(0, 0)}
          className="preview"
        >
          <div className="overlay"></div>
          <RemoveRedEyeIcon className="eye" />
          <img src={image} alt={name} />
        </Link>

        <div className="description">
          <div className="description-content">
            <h5 className="name">{name}</h5>
            <h4 className="price">${price}</h4>
          </div>

          <button
            onClick={() => {
              addToCart(product._id, image, name, price);
              showNotify;
            }}
          >
            <span className="cart">
              <ShoppingCartRoundedIcon />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
