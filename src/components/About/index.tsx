import { useContext } from 'react';

import ContextPortfolio from '../../context/ContextPortfolio';
import StyledInformation from './styled';
import Title from '../../components/UI/Title';
import CardInformation from './CardInformation';

const About: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  const {
    sectionTitle,
    titleText,
    text,
    Information,
    ButtonCV
  } = data.sections[4]


  return (
      <StyledInformation>
        <Title effect={true} sectionTitle={sectionTitle.sectionTitle} description={sectionTitle.description}  />
        <h2>{titleText}</h2>
        <div className="contentAbout">
          <div className="textAbout">
            <div className="text" dangerouslySetInnerHTML={{__html: text}}></div>
          </div>
          <div className="divider"></div>
          <div className="information">
            <ul>
            {Information.map(( { informationPersonal, image, id } ) => (
                <CardInformation key={id} url={image.url} alternativeText={image.alternativeText} informationPersonal={informationPersonal} />
            ))}
            </ul>
            <button>
              <a href={'cv_andre.pdf'} target={ButtonCV.target} download={'Currículo - André'}>
                  <p>
                    {ButtonCV.title}
                  </p>
              </a>
              </button>
          </div>
        </div>
      </StyledInformation>
  )
};

export default About;


