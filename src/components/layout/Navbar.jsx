import { useState } from 'react';
import { portfolioData } from '../../data/portfolio';

const Navbar = () => {
  const { personal } = portfolioData;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About', icon: 'mdi-social-person' },
    { href: '#experience', label: 'Experience', icon: 'mdi-action-trending-up' },
    { href: '#projects', label: 'Projects', icon: 'mdi-av-my-library-books' },
    { href: '#skills', label: 'Skills', icon: 'mdi-action-assessment' },
    { href: '#education', label: 'Education', icon: 'mdi-social-school' },
    { href: '#publications', label: 'Publications', icon: 'mdi-content-content-paste' },
    { href: '#certificates', label: 'Certificates', icon: 'mdi-action-done-all' },
    { href: '#languages', label: 'Languages', icon: 'mdi-social-public' },
    { href: '#contact', label: 'Contact', icon: 'mdi-content-mail' }
  ];

  const handleProfileClick = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <nav className="hide-on-small-only">
        <ul className="side-nav fixed section table-of-contents">
          <li className="logo">
            <button
              id="logo-container"
              aria-label="Click to view larger image"
              onClick={handleProfileClick}
              className="brand-logo grey-blue-text profile-pic-button"
            >
              <img
                src={personal.photo}
                className="circle img-responsive profile-pic"
                alt="avatar"
              />
            </button>
          </li>
          
          {navItems.map((item) => (
            <li key={item.href} className="bold">
              <a
                aria-label={`Navigate to the ${item.label} section`}
                href={item.href}
                className="waves-effect waves-dark teal-text"
              >
                <i className={`${item.icon} small`}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
          
          <li className="bold">
            <a
              aria-label="Open Anil's resume in a new tab"
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="waves-effect waves-dark teal-text"
            >
              <i className="mdi-file-folder-open small"></i>
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
            <img src={personal.photo} alt={personal.name} className="lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;