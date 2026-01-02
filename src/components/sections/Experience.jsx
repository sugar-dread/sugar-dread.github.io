import SectionTitle from '../common/SectionTitle';
import Card, { CardContent, CardAction } from '../common/Card';
import { portfolioData } from '../../data/portfolio';

const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="section scrollspy">
      <SectionTitle title="Experience" />
      <div className="container">
        {experiences.map((exp) => (
          <Card key={exp.id}>
            <CardContent>
              <div className="row">
                {exp.logo && (
                  <div className="col s12 m2">
                    <a href={exp.website} target="_blank" rel="noopener noreferrer">
                      <img
                        alt={`${exp.company} logo`}
                        src={exp.logo}
                        className="responsive-img center-block"
                      />
                    </a>
                  </div>
                )}
                <div className={exp.logo ? "col s12 m10" : "col s12 m10"}>
                  <p>
                    <span className="card-title">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="teal-text hoverline"
                      >
                        {exp.company}
                      </a>
                    </span>
                  </p>
                </div>
              </div>

              <div className="role brown-text text-darken-2">{exp.role}</div>

              <ul>
                {exp.projects.map((project, idx) => (
                  <li key={idx}>
                    <b>Project: {project.name}</b>
                    {project.tools.length > 0 && (
                      <>
                        <br />
                        <b>Tools:</b> {project.tools.join(', ')}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardAction>
              <span>{exp.period} | {exp.location}</span>
            </CardAction>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
