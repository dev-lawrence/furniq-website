import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  const { label, img, title, author, date, text, link } = event;

  return (
    <>
      <div className="event">
        <span className="label">{label}</span>

        <Link to="#" className="img">
          <img src={img} alt="chair" aria-label="chair" />
        </Link>
        <div className="event-title">
          <Link className="sub-head" to="#">
            {title}
          </Link>
          <div className="d-flex">
            <p className="date">{date}</p>
            <p>
              by
              <Link className="author" to="#">
                {author}
              </Link>
            </p>
          </div>

          <div className="mb-150 text">
            <p>{text}</p>
          </div>

          <Link className="btn" to="/">
            {link}
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;
