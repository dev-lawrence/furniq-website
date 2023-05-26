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

        <div onClick={handleScrollToTop} className="page-up">
          <Link to="#" className={showScrollArrow ? 'showArrow' : ''}>
            <KeyboardDoubleArrowUpIcon className="up-icon" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
