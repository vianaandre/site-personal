import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  margin-top: ${props => props.theme.spacing(10)};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export default StyledFooter;
