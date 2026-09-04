import { Link } from "react-router-dom";
import { siteInfo, socialLinks, designerCredit } from "../content/siteContent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-auto">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-brand mb-3">{siteInfo.brandName}</h5>
            <p className="text-muted">
              Premium private basketball coaching in {siteInfo.city}. Elevating athletes through disciplined
              training, fundamental development, and basketball IQ enhancement.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href={socialLinks.instagram} className="social-btn" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href={socialLinks.twitter} className="social-btn" aria-label="Twitter / X">
                <i className="bi bi-twitter-x" />
              </a>
              <a href={socialLinks.facebook} className="social-btn" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href={socialLinks.linkedin} className="social-btn" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/about">About Coach</Link>
              </li>
              <li>
                <Link to="/services">Training Programs</Link>
              </li>
              <li>
                <Link to="/schedule">Schedule Session</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">Resources</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/blog">Blog &amp; Tips</Link>
              </li>
              <li>
                <Link to="/testimonials">Success Stories</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="mb-3">Get In Touch</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope" />
                <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone" />
                <a href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`}>{siteInfo.phone}</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt" />
                <span>{siteInfo.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="footer-bottom row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-muted mb-0 small">
              © {year} {siteInfo.fullName}. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-muted mb-0 small">
              Website Designed by{" "}
              <a href={designerCredit.url} target="_blank" rel="noopener noreferrer">
                {designerCredit.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
