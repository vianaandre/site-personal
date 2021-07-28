import styled from 'styled-components';

const StyledPosts = styled.div`

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: ${props => props.theme.spacing(8)};

  @media(max-width: 767px) {
    margin-top: ${props => props.theme.spacing(3.5)};
  }

  @media(max-width: 1279px) and (min-width: 1025px) {
    gap: 20px 50px;
  };

  @media(max-width: 1024px) and (min-width: 768px) {
    justify-content: center;
    gap: 20px 40px;
  };

`

export default StyledPosts;
