import SectionTitle from '../common/SectionTitle';
import Card, { CardContent } from '../common/Card';
import { portfolioData } from '../../data/portfolio';

const Certificates = () => {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="section scrollspy">
      <SectionTitle title="Certificates" />
      <div className="container">
        <div className="row">
          <div className="col s24 m12 l12">
            <Card>
              <CardContent>
                {certificates.map((cert, idx) => (
                  <p key={idx}>
                    <span className="card-title">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="teal-text hoverline"
                        style={{ textTransform: 'none' }}
                      >
                        {cert.name}
                      </a>
                    </span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
