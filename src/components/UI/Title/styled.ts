import styled from 'styled-components';

const StyledTitle = styled.div`
  position: relative;

  margin-top: ${props => props.theme.spacing(7)};

  @media(max-width: 767px) {
    margin-top: ${props => props.theme.spacing(6)};
  }

  div {
    z-index: -1;
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    background-color: rgba(189, 195, 255, 0.4);;
    opacity: 0.4;
    border-radius: 50%;

    @media(max-width: 767px) {
      width: 2rem;
      height: 2rem;
    }
  }

  h2 {
    margin-left: .93rem;
    font-size: ${props => props.theme.spacing(6)};
    font-weight: 700;

    color: ${props => props.theme.colors.colorText};

    @media(max-width: 1024px) and (min-width: 768px) {
      font-size: ${props => props.theme.spacing(4)};
    };

    @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(5)};
    }
  }

  p {
    font-size: ${props => props.theme.spacing(2.25)};
    margin-top: -.325rem;
    margin-left: .93rem;

    color: ${props => props.theme.colors.colorText};

    @media(max-width: 1024px) and (min-width: 768px) {
      font-size: ${props => props.theme.spacing(2)}
    };

    @media(max-width: 767px) {
      font-size: ${props => props.theme.spacing(1.5)}
    }
  }
`;

export default StyledTitle;

