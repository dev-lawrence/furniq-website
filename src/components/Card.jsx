import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const { img, alt, title, price, icon } = item;

  return (
    <>
      <Link className="product" to="/shop">
        {/* <div className="product"> */}
        <img src={img} alt={alt} />

        <div className="description">
          <div className="description-content">
            <h5 className="name">{title}</h5>
            <h4 className="price">${price}</h4>
          </div>

          <span className="cart" href="#">
            {icon}
          </span>
        </div>
        {/* </div> */}
      </Link>
    </>
  );
};

export default Card;
