import styled from 'styled-components';

const StyledNavBarBlog = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing(8)};

  @media(max-width: 767px) {
    margin-top: ${props => props.theme.spacing(6)};
  }

  nav {
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.white};
    border-radius: 5px;
    overflow: hidden;

    .color {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white}
    }

    a {
      font-size: ${props => props.theme.spacing(3)};
      color: ${props => props.theme.colors.colorText};
      font-weight: 600;
      padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(8)};

      @media(max-width: 767px) {
        font-size: ${props => props.theme.spacing(3)};
        padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(3.5)};
      }

      &:hover {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.primary};
      }
      @media(max-width: 767px) {
        &:hover {
          color: ${props => props.theme.colors.colorText};
          background-color: ${props => props.theme.colors.white};
        }
      }
    }
  }
`

export default StyledNavBarBlog;
