import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Review = () => {
  return (
    <div className="review">
      <div className="d-grid">
        <div className="user-review">
          <span>27 Aug 2016</span>
          <h4>Brandon William</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <form className="form">
          <h4>Add Review</h4>

          <input type="text" placeholder="Name*" />
          <input type="email" placeholder="Email*" />

          <div className="rating">
            <h4>Your Rating: </h4>

            <div className="stars">
              <StarBorderIcon className="star" />
              <StarBorderIcon className="star" />
              <StarBorderIcon className="star" />
              <StarBorderIcon className="star" />
              <StarBorderIcon className="star" />
            </div>
          </div>

          <textarea cols="9" rows="9" placeholder="Your Review"></textarea>
          <br />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
