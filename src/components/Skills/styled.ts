import styled from 'styled-components';

const StyledSkills = styled.section`
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

  .cardsSkills {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: ${props => props.theme.spacing(6)};

    @media(max-width: 1279px) and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: ${props => props.theme.spacing(4)};
    };

    @media(max-width: 767px) {
      justify-content: center;

      margin-top: ${props => props.theme.spacing(1)};
    }

  }
`

export default StyledSkills;
