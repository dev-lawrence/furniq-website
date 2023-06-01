const Newsletter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="bg-img"></div>
        <div className="content">
          <div className="title mb-0">
            <h2>Join Our Newsletter Now</h2>
            <p>
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>

          <form>
            <input type="email" placeholder="Enter your email" />
            <button className="btn" type="submit">
              subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
