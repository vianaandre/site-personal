import styled from 'styled-components';

const StyledShare = styled.section`
  display: flex;
  align-items: center;
  margin-top: ${props => props.theme.spacing(8)};

  h2 {
    font-size: ${props => props.theme.spacing(4.5)};
    font-weight: 600;
    margin-right: ${props => props.theme.spacing(3)};
    color: ${props => props.theme.colors.colorText};
  }

  .iconShare {
    a {
      margin-right: ${props => props.theme.spacing(2.5)}
    }
  }
`

export default StyledShare;
