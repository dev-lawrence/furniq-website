import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const Footer = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 1300) {
        setShowScrollArrow(true);
      } else {
        setShowScrollArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              <Link to={'/'} className="btn">
                read more
              </Link>
            </div>
            <div className="quick-menu menu--links m-b">
              <h3>quick menu</h3>
              <li>
                <Link to={'/'}>Customer Reviews</Link>
              </li>
              <li>
                <Link to={'/'}>Wholesale or Trade</Link>
              </li>
              <li>
                <Link to={'/'}>Careers</Link>
              </li>
              <li>
                <Link to={'/'}>Contact</Link>
              </li>
            </div>
            <div className="other-links menu--links m-b">
              <h3>other links</h3>
              <li>
                <Link to={'/'}>Shipping & Delivery</Link>
              </li>
              <li>
                <Link to={'/'}>Returns & Exchanges</Link>
              </li>
              <li>
                <Link to={'/'}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={'/'}>Terms of Service</Link>
              </li>
            </div>
            <div className="social-links m-b">
              <h3>social icons</h3>
              <Link to={'/'}>
                <FacebookIcon />
              </Link>
              <Link to={'/'}>
                <TwitterIcon />
              </Link>
              <Link to={'/'}>
                <InstagramIcon />
              </Link>
              <Link to={'/'}>
                <YouTubeIcon />
              </Link>
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright © 2023 All Rights Reserved | This template is made by
              <Link to="/" className="author">
                Dev lawrence
              </Link>
            </p>
          </div>
        </div>

        <div onClick={handleScrollToTop} className="page-up">
          <span className={showScrollArrow ? 'showArrow' : ''}>
            <KeyboardDoubleArrowUpIcon className="up-icon" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
