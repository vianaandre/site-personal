import styled from 'styled-components';

const StyledProcess = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  padding-top: ${props => props.theme.spacing(1)};

  @media(max-width: 767px) {
    padding-top: 0;
  }

  @media(max-width: 1279px) and (min-width: 1025px) {
    width: 1024px;
  };

  @media(max-width: 1024px) and (min-width: 768px) {
    width: 768px;
  };

  @media(max-width: 767px) {
    width: 300px;
  }

  margin-top: ${props => props.theme.spacing(8)};

  text-align: center;

  @media(max-width: 767px) {
    margin-top: ${props => props.theme.spacing(5)};
  }

  .cardsProcess {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: ${props => props.theme.spacing(6)};

    @media(max-width: 1279px) and (min-width: 1025px) {
      justify-content: space-around;
    };

    @media(max-width: 1024px) and (min-width: 768px) {
      justify-content: space-around;
    };

    @media(max-width: 767px) {
      margin-top: ${props => props.theme.spacing(2)}
    }

  }
`;

export default StyledProcess;
