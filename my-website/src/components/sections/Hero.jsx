import { portfolioData } from '../../data/portfolio';
import TypedText from '../common/TypedText';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <div id="intro" className="section scrollspy full-height">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <p className="hero-greeting">
              Hello, I'm
            </p>
            <h1 className="hero-name">
              {personal.name}
            </h1>
            <p className="hero-title">
              {personal.title}
            </p>
            <div className="hero-taglines">
              <TypedText strings={personal.taglines} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;