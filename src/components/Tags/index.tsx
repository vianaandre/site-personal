import React from 'react';

import StyledTag from './styled';

type TagsProps = {
  tags: Array<{ tag: string }>
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
      <StyledTag>
        <h3>Tags:</h3>
        <div className="tags">
          <ul>
            {tags.map(({ tag }, index) => (
              <li key={index} >{tag}</li>
            ))}
          </ul>
        </div>
      </StyledTag>
  )
}

export default Tags;
