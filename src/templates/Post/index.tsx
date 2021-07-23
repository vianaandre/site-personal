import React from 'react';

import StyledTemplatePost from '../../styles/pages/Post';
import Header from '../../components/Header';
import ThumbnailPost from '../../components/ThumbnailPost';

const TemplatePost: React.FC = () => {
  return (
    <StyledTemplatePost>
      <Header />
      <ThumbnailPost />
    </StyledTemplatePost>
  )
}

export default TemplatePost;
