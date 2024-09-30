import React from 'react';
import content from '../data/content.json';

const Footer = () => {
  const { footer } = content;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <h2>FutureEdges</h2>
        </div>

        {/* Explore Menu */}
        <div className="footer-menu">
          <h3>{footer.exploreMenu.title}</h3>
          <ul>
            {footer.exploreMenu.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Menu */}
        <div className="footer-menu">
          <h3>{footer.companyMenu.title}</h3>
          <ul>
            {footer.companyMenu.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>{footer.contactInfo.title}</h3>
          <p>{footer.contactInfo.address}</p>
          <p>{footer.contactInfo.phoneNumbers.join(', ')}</p>
          <p>
            <a href={`mailto:${footer.contactInfo.email}`}>
              {footer.contactInfo.email}
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            {footer.socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
