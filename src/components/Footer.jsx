import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
      <section id="footer-section">
        <div className="container">
          <div className="grid">
            <div className="about m-b">
              <h3>Furniq</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat quos rem ullam, placeat amet.
              </p>
              <Link className="btn">read more</Link>
            </div>
            <div className="quick-menu menu--links m-b">
              <h3>quick menu</h3>
              <li>
                <Link>Customer Reviews</Link>
              </li>
              <li>
                <Link>Wholesale or Trade</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>contact</Link>
              </li>
            </div>
            <div className="other-links menu--links m-b">
              <h3>other links</h3>
              <li>
                <Link href="#">Shipping & Delivery</Link>
              </li>
              <li>
                <Link href="#">Returns & Exchanges</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </div>
            <div className="social-links m-b">
              <h3>social icons</h3>
              <Link>
                <FacebookIcon />
              </Link>
              <Link>
                <TwitterIcon />
              </Link>
              <Link>
                <InstagramIcon />
              </Link>
              <Link>
                <YouTubeIcon />
              </Link>
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright © 2022 All Rights Reserved | This template is made by
              <Link to="/" className="author">
                dev lawrence
              </Link>
            </p>
          </div>
        </div>
        <div className="page-up">
          <Link to="#">
            <i className="fas fa-angle-double-up"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
