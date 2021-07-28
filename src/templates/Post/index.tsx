import React, { useContext, useEffect, useState } from 'react';

import StyledTemplatePost from '../../styles/pages/Post';
import Header from '../../components/Header';
import ThumbnailPost from '../../components/ThumbnailPost';
import ContentPost from '../../components/ContentPost';
import Share from '../../components/Share';
import ContextPost from '../../context/ContextPost';
import Container from '../../styles/container';
import Tags from '../../components/Tags';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import ButtonFloat from '../../components/ButtonFloat';

const TemplatePost: React.FC = () => {

  const [ link, setLink ] = useState(String)

  useEffect(() => {

    const hrefCurrent = window.location.href

    setLink(hrefCurrent)

  }, [])

  const { data } = useContext(ContextPost)

  const dataHref = [
    link,
    link,
    data.title + '+' + link,
  ]

  return (
    <StyledTemplatePost>
        <Header />
        <Container>
          <div className="contentPost">
            <ThumbnailPost />
            <ContentPost />
              <div className='share'>
                <Share href={dataHref} />
                <Tags tags={data.tag} />
              </div>
          </div>
      </Container>
      <Newsletter />
      <Footer />
      <ButtonFloat />
    </StyledTemplatePost>
  )
}

export default TemplatePost;
