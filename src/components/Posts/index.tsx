import React, { useContext } from 'react';

import ContextBlog from '../../context/ContextBlog';
import StyledPosts from './styled';
import CardPosts from './CardPosts';
import Container from '../../styles/container';

const Posts: React.FC = () => {

  const { data } = useContext(ContextBlog);

  return (
    <Container>
      <StyledPosts>
        {data.allCardposts.map(({ title, slug, thumbnail, description }, index) => (
          <div key={index}>
            <CardPosts title={title} slug={slug} img={thumbnail} value={description.value} />
          </div>
        ))}
      </StyledPosts>
     </Container>
  )
};

export default Posts;
