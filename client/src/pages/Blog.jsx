import Hero from '../components/Hero';
import BlogImg1 from '../assets/img/hero-bg4.webp';
import BlogImg2 from '../assets/img/newsletter.webp';
import BlogImg3 from '../assets/img/shopping.webp';
import BlogImg4 from '../assets/img/couch10.webp';
import BlogImg5 from '../assets/img/chair9.webp';
import BlogImg6 from '../assets/img/table11.webp';
import { Link } from 'react-router-dom';
import PageBreadCrumbs from '../components/PageBreadCrumbs';

const Blog = () => {
  return (
    <section className="blog-section">
      <Hero text="Blog" />
      <div className="pt-section">
        <div className="container">
          <PageBreadCrumbs />
        </div>
        <div className="blog-line"></div>
        <div className="container">
          <div className="content grid">
            {/* ROW 1 */}
            <div className="row-1">
              <div className="row">
                <div className="blog-img">
                  <Link to={'#'} className="img">
                    <img aria-label="man-reading" src={BlogImg1} alt="" />
                  </Link>
                  <span className="date">
                    <strong>28</strong>
                    <br />
                    <p>Jan, 2023</p>
                  </span>
                </div>
                <div className="text">
                  <h3>
                    <Link to="#">6 Must-Have Modern Home Furniture</Link>
                  </h3>
                  <ul>
                    <span className="ml">
                      by Admin
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      28 January, 2023
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      Furniture's
                      <span className="border-right">|</span>
                    </span>
                    <span>8 Comments</span>
                  </ul>
                  <p>
                    Embark on a journey of transforming your living space with
                    these six essential furniture pieces designed to infuse your
                    home with a perfect blend of contemporary style and
                    functional practicality
                  </p>
                  <Link href="#" className="btn">
                    <span>continue reading</span>
                    <i className="fas fa-arrow-right arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="blog-img">
                  <a href="#" className="img">
                    <img aria-label="table" src={BlogImg2} alt="" />
                  </a>
                  <span className="date">
                    <strong>20</strong>
                    <br />
                    <p>Feb, 2023</p>
                  </span>
                </div>
                <div className="text">
                  <h3>
                    <Link to="#">Space-Saving Ideas for Small Furniture</Link>
                  </h3>
                  <ul>
                    <span className="ml">
                      by Admin
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      20 February, 2021
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      Table, Couch
                      <span className="border-right">|</span>
                    </span>
                    <span>8 Comments</span>
                  </ul>
                  <p>
                    Embrace the challenge of limited space with these ingenious
                    space-saving ideas designed to optimize every inch of your
                    compact living area
                  </p>
                  <Link href="#" className="btn">
                    <span>continue reading</span>
                    <i className="fas fa-arrow-right arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="blog-img">
                  <a href="#" className="img">
                    <img aria-label="cart" src={BlogImg3} alt="" />
                  </a>
                  <span className="date">
                    <strong>18</strong>
                    <br />
                    <p>Mar, 2023</p>
                  </span>
                </div>
                <div className="text">
                  <h3>
                    <a href="#">Impress Guests: 6 Stunning Dining Sets</a>
                  </h3>
                  <ul>
                    <span className="ml">
                      by Admin
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      18 March, 2023
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      Shopping
                      <span className="border-right">|</span>
                    </span>
                    <span>8 Comments</span>
                  </ul>
                  <p>
                    Elevate your dining experience to new heights of
                    sophistication and allure with these six stunning dining
                    room furniture sets. From elegant formal designs to chic
                    contemporary styles, each set exudes its own unique
                    character and charm.
                  </p>
                  <Link href="#" className="btn">
                    <span>continue reading</span>
                    <i className="fas fa-arrow-right arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="blog-img">
                  <a href="#" className="img">
                    <img aria-label="couch" src={BlogImg4} alt="" />
                  </a>
                  <span className="date">
                    <strong>24</strong>
                    <br />
                    <p>Mar, 2021</p>
                  </span>
                </div>
                <div className="text">
                  <h3>
                    <a href="#">Eco-Friendly Brands</a>
                  </h3>
                  <ul>
                    <span className="ml">
                      by Admin
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      24 March, 2023
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      Couch
                      <span className="border-right">|</span>
                    </span>
                    <span>8 Comments</span>
                  </ul>
                  <p>
                    Embrace a conscious approach to furnishing your home with
                    these six commendable eco-friendly furniture brands. Each
                    brand is committed to sustainable practices, utilizing
                    environmentally friendly materials, reducing carbon
                    footprint, and promoting ethical manufacturing processes.
                  </p>
                  <Link href="#" className="btn">
                    <span>continue reading</span>
                    <i className="fas fa-arrow-right arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="blog-img">
                  <a href="#" className="img">
                    <img aria-label="chair" src={BlogImg5} alt="" />
                  </a>
                  <span className="date">
                    <strong>28</strong>
                    <br />
                    <p>Jan, 2023</p>
                  </span>
                </div>
                <div className="text">
                  <h3>
                    <a href="#">Cozy and Stylish: 6 Comfortable Picks</a>
                  </h3>
                  <ul>
                    <span className="ml">
                      by Admin
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      24 January, 2023
                      <span className="border-right">|</span>
                    </span>
                    <span className="ml">
                      chair
                      <span className="border-right">|</span>
                    </span>
                    <span>8 Comments</span>
                  </ul>
                  <p>
                    Indulge in the luxurious comfort and impeccable style
                    offered by these carefully curated furniture picks. Dive
                    into plush sofas, ergonomic chairs, and sumptuous bedding
                    that invite you to unwind and relax in utmost tranquility.
                  </p>
                  <Link href="#" className="btn">
                    <span>continue reading</span>
                    <i className="fas fa-arrow-right arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* ROW 2 */}
            <div className="row row-2">
              <div className="search">
                <form className="form" netlify="true">
                  <input type="text" className="key" placeholder="search" />
                  <div className="icon">
                    <i className="fas fa-search"></i>
                  </div>
                </form>
              </div>
              {/* CATEGORIES */}
              <div className="categories">
                <h3>categories</h3>
                <ul className="links">
                  <li>
                    <Link to="#">Table</Link>
                  </li>
                  <li>
                    <Link to="#">Chair</Link>
                  </li>
                  <li>
                    <Link to="#">Couch</Link>
                  </li>
                  <li className="press">
                    <Link to="#">Bed</Link>
                  </li>
                </ul>
              </div>
              {/* POPULAR */}
              <div className="popular">
                <h3>most popular</h3>
                <div className="link">
                  <Link to="#" className="img">
                    <img src={BlogImg2} alt="" />
                  </Link>
                  <div className="text">
                    <Link to="#">style your home</Link>
                    <p>3 days ago</p>
                  </div>
                </div>
                <div className="link">
                  <Link to="#" className="img">
                    <img src={BlogImg6} alt="" />
                  </Link>
                  <div className="text">
                    <Link to="#">Couch and chairs</Link>
                    <p>3 days ago</p>
                  </div>
                </div>
                <div className="link">
                  <Link to="#" className="img">
                    <img src={BlogImg5} alt="" />
                  </Link>
                  <div className="text">
                    <Link to="#">style your home</Link>
                    <p>3 days ago</p>
                  </div>
                </div>
                <div className="link">
                  <Link to="#" className="img">
                    <img src={BlogImg3} alt="" />
                  </Link>
                  <div className="text">
                    <Link to="#">Couch and chairs</Link>
                    <p>5 days ago</p>
                  </div>
                </div>
                <div className="link">
                  <Link to="#" className="img">
                    <img src={BlogImg4} alt="" />
                  </Link>
                  <div className="text">
                    <Link to="#">Couch and chairs</Link>
                    <p>10 days ago</p>
                  </div>
                </div>
              </div>
              {/* ARCHIVE */}
              <div className="archive">
                <h3>archive</h3>
                <ul className="links">
                  <div className="flex">
                    <Link to="#">july 2021</Link>
                    <p>(9)</p>
                  </div>
                  <div className="flex">
                    <Link to="#">june 2021</Link>
                    <p>(39)</p>
                  </div>
                  <div className="flex">
                    <Link to="#">may 2021</Link>
                    <p>(29)</p>
                  </div>
                  <div className="flex">
                    <Link to="#">april 2021</Link>
                    <p>(35)</p>
                  </div>
                  <div className="flex">
                    <Link to="#">march 2021</Link>
                    <p>(22)</p>
                  </div>
                  <div className="flex">
                    <Link to="#">february 2021</Link>
                    <p>(32)</p>
                  </div>
                  <div className="flex">
                    <Link to="#">january 2021</Link>
                    <p>(21)</p>
                  </div>
                  <div className="flex">
                    <Link to="#">december 2021</Link>
                    <p>(26)</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
