import styled from 'styled-components';

const StyledLogo = styled.div`

.logo {
    display: flex;
    align-items: center;

    .img {
      padding-right: ${props => props.theme.spacing(3)};
      border-right: solid 1px ${props => props.theme.colors.tertiary};
    }

    h1 {
      font-size: ${props => props.theme.spacing(3)};
      font-weight: 600;
      font-family: ${props => props.theme.fonts.family.primary};
      text-transform: uppercase;

      margin-left: ${props => props.theme.spacing(3)};

      span {
        color: ${props => props.theme.colors.primary}
      }
    }
  };

`

export default StyledLogo;
