import SectionTitle from '../common/SectionTitle';
import Card, { CardContent, CardAction } from '../common/Card';
import { portfolioData } from '../../data/portfolio';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section scrollspy">
      <SectionTitle title="Education" />
      <div className="container">
        <div className="row">
          {education.map((edu) => (
            <div key={edu.id} className="col s24 m12 l12">
              <Card>
                <CardContent>
                  <p>
                    <span className="card-title">
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="teal-text hoverline"
                      >
                        {edu.institution}
                      </a>
                    </span>
                  </p>
                  <p className="brown-text">{edu.location}</p>
                  <p>
                    <b>Degree: </b>
                    {edu.degree}
                    {edu.thesis && (
                      <>
                        <br />
                        <b>Thesis: </b>
                        <a
                          href={edu.thesis.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#000', textTransform: 'none' }}
                        >
                          {edu.thesis.title}
                        </a>
                      </>
                    )}
                    <br />
                    <b>CGPA: </b>
                    {edu.gpa}
                  </p>
                </CardContent>
                {edu.graduation && (
                  <CardAction>
                    <span>Graduation: {edu.graduation}</span>
                  </CardAction>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
