import styled from 'styled-components';

const StyledPosts = styled.div`

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: ${props => props.theme.spacing(8)};
`

export default StyledPosts;
