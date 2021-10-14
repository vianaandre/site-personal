import { useContext } from 'react';

import ContextPortfolio from '../../context/ContextPortfolio';
import StyledInformation from './styled';
import Title from '../../components/UI/Title';
import CardInformation from './CardInformation';
import information from './data';

const About: React.FC = () => {

  const { data } = useContext(ContextPortfolio)

  const textsobreContent = data.textsobre.textsobre

  return (
      <StyledInformation id={'about'}>
        <Title effect={true} sectionTitle={'Sobre'} description={'informações sobre  mim'}  />
        <h3>{textsobreContent.title}</h3>
        <div className="contentAbout">
          <div className="textAbout">
            <div className="text">
              <p>
                {textsobreContent.text}
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="information">
            <ul>
            {information.map(( {  icon, alt, text }, index ) => (
                <CardInformation key={index} icon={icon} text={text} alt={alt}/>
            ))}
            </ul>
            <button>
              <a href={'/Curriculo-Andre.pdf'} target={'black'} download={'Currículo - André'}>
                  <p>
                    Download do meu CV
                  </p>
              </a>
              </button>
          </div>
        </div>
      </StyledInformation>
  )
};

export default About;


