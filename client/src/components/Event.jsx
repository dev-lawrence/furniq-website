import { events } from '../data/EventData';
import EventCard from './EventCard';

const Event = () => {
  return (
    <>
      <section className="events-section pt-section">
        <div className="title">
          <h2>Our Latest News</h2>
          <p>Latest trends and inspiration in interior design.</p>
        </div>

        <div className="events">
          {events.map((event) => {
            return <EventCard event={event} key={event.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Event;
