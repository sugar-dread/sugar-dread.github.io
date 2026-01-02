import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolio';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="section scrollspy">
      <SectionTitle title="About" />
      <div className="container flow-text">
        <p>{personal.about}</p>
      </div>
    </section>
  );
};

export default About;
