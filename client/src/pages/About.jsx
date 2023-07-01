import Hero from '../components/Hero';
import BreadCrumbs from '../components/BreadCrumbs';
import AboutImg1 from '../assets/img/couch10.webp';
import AboutImg2 from '../assets/img/chair10.webp';
import { useParams } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;

const About = () => {
  return (
    <section className="about">
      <Hero text="About" />
      <div className="container pt-section">
        {/* <BreadCrumbs/> */}
        <div className="content grid">
          <div className="about-info">
            <h2>about us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Odit nobis magni eaque velit eum, id rem eveniet dolor possimus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              explicabo necessitatibus ex rem facere obcaecati eius maiores
              facilis eos voluptatum? voluptas..
            </p>
            <a href="#" className="btn about-btn">
              <span>read more</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="img">
            <img aria-label="couch" src={AboutImg1} alt="couch" />
          </div>
        </div>

        <div className="content grid grid-reverse">
          <div className="about-info">
            <h2>our mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Odit nobis magni eaque velit eum, id rem eveniet dolor possimus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              explicabo necessitatibus ex rem facere obcaecati eius maiores
              facilis eos voluptatum? voluptas..
            </p>
            <a href="#" className="btn">
              <span>read more</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="img">
            <img aria-label="chair" src={AboutImg2} alt="chair" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
