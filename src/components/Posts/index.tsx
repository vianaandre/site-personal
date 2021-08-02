import React, { useContext } from 'react';

import ContextBlog from '../../context/ContextBlog';
import StyledPosts from './styled';
import CardPosts from './CardPosts';
import Container from '../../styles/container';
import Without from '../Without';

const Posts: React.FC = () => {

  const { data } = useContext(ContextBlog);

  return (
    <Container>
      <StyledPosts>
        {data.allCardposts.length > 0 ? data.allCardposts.map(({ title, slug, thumbnail, description }, index) => (
          <div key={index} className="postCard">
            <CardPosts title={title} slug={slug} img={thumbnail} value={description.value} />
          </div>
        )) : <Without currentText={'Posts'} />}

      </StyledPosts>
     </Container>
  )
};

export default Posts;
