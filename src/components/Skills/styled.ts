import styled from 'styled-components';

const StyledSkills = styled.section`
  width: 1280px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  .cardsSkills {
    display: flex;
    justify-content: space-between;

    margin-top: ${props => props.theme.spacing(6)};
  }
`

export default StyledSkills;
