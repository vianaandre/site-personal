import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  @media(max-width: 1279px) and (min-width: 1025px) {
    width: 1024px;
  };

  @media(max-width: 1024px) and (min-width: 768px) {
    width: 768px;
  };

  @media(max-width: 767px) {
    width: 300px;
  }

  margin-top: ${props => props.theme.spacing(10)};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width: 767px) {
    margin-top: ${props => props.theme.spacing(8)};
  }
`

export default StyledFooter;
