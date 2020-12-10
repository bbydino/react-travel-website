import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  const youtube = "https://www.youtube.com/channel/UCTwC-PFmfAUMYmHUl1r_cZw";
  const soundcloud = "https://soundcloud.com/bbydinobeats";
  const insta = "https://www.instagram.com/bbydinobeats";
  const fb = "https://www.facebook.com";
  const linkedin = "https://www.linkedin.com";
  const twitter = "https://www.twitter.com";

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to receive some slickity slick vacation deals!
        </p>
        <p className="footer-subscription-text">You can unsubscribe at any time.</p>
        <div className="input-areas">
          <form>
            <input className="footer-input" name="email" type="email" placeholder="Your Email" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/home">Testimonials</Link>
            <Link to="/home">Careers</Link>
            <Link to="/home">Investors</Link>
            <Link to="/home">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/services">Contact</Link>
            <Link to="/services">Support</Link>
            <Link to="/services">Destinations</Link>
            <Link to="/services">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/sign-up">Submit Video</Link>
            <Link to="/sign-up">Ambassadors</Link>
            <Link to="/sign-up">Agency</Link>
            <Link to="/sign-up">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href={fb}>Facebook</a>
            <a href={insta}>Instagram</a>
            <a href={youtube}>Youtube</a>
            <a href={twitter}>Twitter</a>
            <a href={linkedin}>LinkedIn</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/home" className="social-logo">
              Travel
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">Travel © 2020</small>
          <div class="social-icons">
            <a href={fb} target="blank" class="social-icon-link facebook" aria-label="Facebook">
              <i class="fab fa-facebook-f" />
            </a>
            <a href={soundcloud} target="blank" class="social-icon-link soundcloud" aria-label="SoundCloud">
              <i class="fab fa-soundcloud" />
            </a>
            <a href={insta} target="blank" class="social-icon-link instagram" aria-label="Instagram">
              <i class="fab fa-instagram" />
            </a>
            <a href={youtube} target="blank" class="social-icon-link youtube" aria-label="Youtube">
              <i class="fab fa-youtube" />
            </a>
            <a href={twitter} target="blank" class="social-icon-link twitter" aria-label="Twitter">
              <i class="fab fa-twitter" />
            </a>
            <a href={linkedin} target="blank" class="social-icon-link linkedin" aria-label="LinkedIn">
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
