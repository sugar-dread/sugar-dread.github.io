import SectionTitle from '../common/SectionTitle';
import Card, { CardContent } from '../common/Card';
import { portfolioData } from '../../data/portfolio';

const Publications = () => {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="section scrollspy">
      <SectionTitle title="Publications" />
      <div className="container">
        <div className="row">
          <div className="col s24 m12 l12">
            <Card>
              <CardContent>
                {publications.map((pub, idx) => (
                  <p key={pub.id}>
                    <span className="card-title">
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="teal-text hoverline"
                      >
                        {idx + 1}- {pub.title}
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

export default Publications;
