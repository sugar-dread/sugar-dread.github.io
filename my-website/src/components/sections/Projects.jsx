import SectionTitle from '../common/SectionTitle';
import Card, { CardContent, CardReveal } from '../common/Card';
import { portfolioData } from '../../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section scrollspy">
      <SectionTitle title="Hobby Projects" />
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col s12 m6 l4">
              <Card className="medium">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    alt={project.title}
                    src={project.image}
                    style={{ height: '100%', width: '100%' }}
                    className="activator"
                  />
                </div>
                
                <CardContent>
                  <span className="card-title activator teal-text hoverline">
                    {project.title}
                    <i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>{project.description}</p>
                </CardContent>

                <CardReveal>
                  <span className="card-title grey-text">
                    <small>Accomplishments</small>
                    <i className="mdi-navigation-close right"></i>
                  </span>
                  <ul>
                    <li>
                      <b>Tools:</b> {project.tools.join(', ')}
                    </li>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="card-action">
                    <a
                      aria-label="Visit the GitHub repo for project"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-position="top"
                      data-tooltip="View Source"
                      className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </CardReveal>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
