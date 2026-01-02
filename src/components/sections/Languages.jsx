import SectionTitle from '../common/SectionTitle';
import Card, { CardContent } from '../common/Card';
import { portfolioData } from '../../data/portfolio';

const Languages = () => {
  const { languages } = portfolioData;

  return (
    <section id="languages" className="section scrollspy">
      <SectionTitle title="Languages" />
      <div className="container">
        <div className="row">
          <div className="col s24 m12 l12">
            <Card>
              <CardContent>
                <p>
                  {languages.map((lang, idx) => (
                    <span key={idx}>
                      {lang.language} - {lang.level}
                      {idx < languages.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
