import { useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';

const MobileNav = () => {
  const { personal } = portfolioData;

  const navItems = [
    { href: '#about', icon: 'mdi-social-person', label: 'About' },
    { href: '#experience', icon: 'mdi-action-trending-up', label: 'Experience' },
    { href: '#projects', icon: 'mdi-av-my-library-books', label: 'Hobby Projects' },
    { href: '#skills', icon: 'mdi-action-assessment', label: 'Skills' },
    { href: '#education', icon: 'mdi-social-school', label: 'Education' },
    { href: '#publications', icon: 'mdi-editor-mode-edit', label: 'Publications' },
    { href: '#certificates', icon: 'mdi-editor-mode-edit', label: 'Certificates' },
    { href: '#languages', icon: 'mdi-action-language', label: 'Languages' },
    { href: '#contact', icon: 'mdi-content-mail', label: 'Contact' }
  ];

  useEffect(() => {
    // Initialize mobile nav after component mounts
    if (window.$ && window.$.fn.sideNav) {
      window.$('.button-collapse').sideNav({
        menuWidth: 190,
        edge: 'left',
        closeOnClick: true
      });
    }
  }, []);

  return (
    <>
      <nav className="hide-on-large only trigger z-depth-1">
        <a
          aria-label="Toggle visibility of the mobile navbar"
          href="#intro"
          data-activates="slide-out"
          className="button-collapse"
        >
          <i className="mdi-navigation-menu"></i>
        </a>
        <div className="name-title">
          <a
            id="name"
            aria-label="Navigate to the beginning of the page"
            href="#intro"
            className="teal-text"
          >
            {personal.name}
          </a>
          <span className="black-text">{personal.title}</span>
        </div>
      </nav>

      <nav className="hide-on-large only">
        <ul id="slide-out" className="side-nav">
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
              aria-label="Open Anil's Resume in a new tab"
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
    </>
  );
};

export default MobileNav;
