import { useRef, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Review = ({ reviews, setReviews, LOCAL_STORAGE_KEY }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const reviewRef = useRef();

  // get date
  const date = new Date();
  const formatDate = date.toLocaleDateString('en-NG', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Function to add a new review
  const handleAddReview = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const reviewMessage = reviewRef.current.value;

    if (!name || !email || !reviewMessage) return;

    const newReview = {
      date: formatDate,
      name: name,
      email: email,
      reviewMessage: reviewMessage,
    };

    setReviews((prevReviews) => {
      return [...prevReviews, newReview];
    });

    nameRef.current.value = null;
    emailRef.current.value = null;
    reviewRef.current.value = null;

    console.log(reviewDate);
  };

  // save todo to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  return (
    <div className="review">
      <div className="d-grid">
        {reviews.length === 0 ? (
          <span className="no-review">There are no reviews yet.</span>
        ) : (
          <div>
            {reviews.map(({ date, name, reviewMessage }, index) => (
              <div key={index} className="user-review">
                <span>{date}</span>
                <h4>{name}</h4>
                <p>{reviewMessage}</p>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleAddReview} className="form">
          <h4>Add Review</h4>

          <input ref={nameRef} type="text" placeholder="Name*" />
          <input ref={emailRef} type="email" placeholder="Email*" />

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

          <textarea
            ref={reviewRef}
            cols="9"
            rows="9"
            placeholder="Your Review"
          ></textarea>
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
