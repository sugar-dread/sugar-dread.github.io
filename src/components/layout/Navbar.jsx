import { portfolioData } from '../../data/portfolio';

const Navbar = () => {
  const { personal } = portfolioData;

  const navItems = [
    { href: '#about', icon: 'mdi-social-person', label: 'About' },
    { href: '#experience', icon: 'mdi-action-trending-up', label: 'Experience' },
    { href: '#projects', icon: 'mdi-av-my-library-books', label: 'Hobby Projects' },
    { href: '#skills', icon: 'mdi-action-assessment', label: 'Skills' },
    { href: '#education', icon: 'mdi-social-school', label: 'Education' },
    { href: '#publications', icon: 'mdi-editor-mode-edit', label: 'Publications' },
    { href: '#certificates', icon: 'mdi-action-receipt', label: 'Certificates' },
    { href: '#languages', icon: 'mdi-action-language', label: 'Languages' },
    { href: '#contact', icon: 'mdi-content-mail', label: 'Contact' }
  ];

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(personal.resumeUrl, '_blank');
  };

  return (
    <nav className="hide-on-small-only">
      <ul className="side-nav fixed section table-of-contents">
        <li className="logo">
          <a
            id="logo-container"
            aria-label="Navigate to the beginning of the page"
            href="#intro"
            className="brand-logo grey-blue-text"
          >
            <img
              src={personal.photo}
              className="circle img-responsive profile-pic"
              alt="avatar"
            />
          </a>
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
            href="#resume"
            target="_blank"
            onClick={handleResumeClick}
            className="waves-effect waves-dark teal-text"
          >
            <i className="mdi-file-folder-open small"></i>
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
