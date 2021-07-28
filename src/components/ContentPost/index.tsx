import React, { useContext } from 'react';
import ContextPost from '../../context/ContextPost';

import StyledContentPost from './styled';
import Container from '../../styles/container';
import datoStructureText from '../../utils/dato-structured-text-html';

const ContentPost: React.FC = () => {

  const { data } = useContext(ContextPost)

  const vetorTxtTransform = data.content.map(({ text }) => {
    const trasformText = datoStructureText(text.value)
    return trasformText
  })

  return (
    <Container>
      <StyledContentPost>
        {data.content.map(({ title, images }, index) => (
          <div key={index} className='content'>
            <h2 className='titleSection' >{title}</h2>
            <div className="textPost" dangerouslySetInnerHTML={{ __html: vetorTxtTransform[index] }}></div>
            <div className="imgPost">
              { images && images.map(({ url, alt }, index) => (
                <div key={index} className="img">
                  <img src={url} alt={alt} />
                </div>
              )) }
            </div>
          </div>
        ))}
      </StyledContentPost>
    </Container>
  )
}

export default ContentPost;
