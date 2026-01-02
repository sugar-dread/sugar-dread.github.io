import SectionTitle from '../common/SectionTitle';
import Card, { CardContent } from '../common/Card';
import { portfolioData } from '../../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section scrollspy">
      <SectionTitle title="Skills" />
      <div className="container">
        <Card>
          <CardContent>
            <h4 className="brown-text light">Skills</h4>
            <div className="row text-center">
              {skills.map((skill, idx) => (
                <div key={idx} className="col s4 m2">
                  <img
                    alt={skill.name}
                    src={skill.icon}
                    className="responsive-img"
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
