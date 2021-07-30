import styled from 'styled-components';

const StyledCopyrigth = styled.div`
   .containerCopyrigth {
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

    .copyrigth {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: ${props => props.theme.spacing(6)};
      margin-bottom: ${props => props.theme.spacing(5)};

      p {
        margin-left: ${props => props.theme.spacing(3)};
        font-size: ${props => props.theme.spacing(2.25)};
        font-family: ${props => props.theme.fonts.family.primary}, ${props => props.theme.fonts.family.secondary}, ${props => props.theme.fonts.family.tertiary};
        font-weight: 500;
        color: ${props => props.theme.colors.colorText};
      }

      @media(max-width: 767px) {
        width: 300px;
        justify-content: space-between;
        margin-top: ${props => props.theme.spacing(4)};
        margin-bottom: ${props => props.theme.spacing(3)};
        p {
          font-size: ${props => props.theme.spacing(1.75)};
          margin-left: ${props => props.theme.spacing(0)};
        }
      }
    }
  }
`

export default StyledCopyrigth;
