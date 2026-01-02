import { portfolioData } from '../../data/portfolio';
import SectionTitle from '../common/SectionTitle';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section scrollspy">
      <SectionTitle title="Contact Me" />
      <div className="container">
        <div className="card-panel">
          <div className="row">
            <div className="col s12 m6">
              <div className="contact-item">
                <i className="fa fa-phone left"></i>
                <span className="contact-text">
                  <strong>Phone:</strong> {contact.phone}
                </span>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="contact-item">
                <i className="fa fa-envelope left"></i>
                <span className="contact-text">
                  <strong>Email:</strong> {contact.email}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="contact-item">
                <i className="fa fa-github left"></i>
                <span className="contact-text">
                  <strong>GitHub:</strong> 
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="teal-text">
                    {contact.github.replace('https://', '')}
                  </a>
                </span>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="contact-item">
                <i className="fa fa-linkedin left"></i>
                <span className="contact-text">
                  <strong>LinkedIn:</strong> 
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="teal-text">
                    View Profile
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;