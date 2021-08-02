import React, { useContext } from 'react';
import ContextPost from '../../context/ContextPost';
import Link from 'next/link';

import Container from '../../styles/container';
import StyledThumbnailPost from './styled';
import allMonth from '../../services/Data/month';


const ThumbnailPost: React.FC = () => {

  const { data } = useContext(ContextPost)

  console.log(data.data)

  const vetorData = data.data.split('-');
  const dayData = vetorData[2].split('')

  const year = vetorData[0]
  const month = vetorData[1].split('')[1]
  const day = dayData[0].concat(dayData[1])

  const trasnformMonth = allMonth[month]

  return (
    <Container>
      <StyledThumbnailPost>
        <div className="thumbnail">
          <div className='back'>
            <Link href={'/blog'}>
              <a>
                <img src={'/assets/back.svg'} alt="Ícone de Voltar" />
              </a>
            </Link>
          </div>
          <div className='imgThumb'>
            <img src={data.thumbnail.url} alt={data.thumbnail.alt} />
          </div>
          <div className='informationPost'>
            <ul className='tags'>
              {data.tag.map(({ tag }, index) => (
                <li key={index} >{tag}</li>
              ))}
            </ul>
            <h1>{data.title}</h1>
            <div className="autorData">
              <span>{data.auto}</span>
              <div className='divider'></div>
              <span>{day + " " + trasnformMonth + " de " + year}</span>
            </div>
          </div>
        </div>
      </StyledThumbnailPost>
    </Container>
  )
}

export default ThumbnailPost;
