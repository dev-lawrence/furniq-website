import { useContext } from 'react';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CartContext from '../CartContext';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Card = ({ item, showNotify }) => {
  const { attributes } = item;
  const alt = attributes?.alt;
  const title = attributes?.title;
  const price = attributes?.price;
  const isNew = attributes?.isNew;

  const imageUrl = `${
    attributes?.img &&
    attributes?.img.data &&
    attributes?.img.data.attributes &&
    attributes?.img.data.attributes.url
  }`;

  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="product">
        {isNew && <span className="status">New</span>}

        <Link
          to={`/product/${item.id}`}
          onClick={() => window.scrollTo(0, 0)}
          className="preview"
        >
          <div className="overlay"></div>
          <RemoveRedEyeIcon className="eye" />
          <img src={imageUrl} alt={alt} />
        </Link>

        <div className="description">
          <div className="description-content">
            <h5 className="name">{title}</h5>
            <h4 className="price">${price}</h4>
          </div>

          <button
            onClick={() => {
              addToCart(item.id, imageUrl, alt, title, price);
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
