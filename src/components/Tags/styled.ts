import styled from 'styled-components';

const StyledTag = styled.section`
  margin-top: ${props => props.theme.spacing(4)};

  display: flex;
  align-items: center;

  @media(max-width: 767px) {
    align-items: flex-start;
  }


  h3 {
    font-size: ${props => props.theme.spacing(3)};
    font-weight: 600;
    color: ${props => props.theme.colors.colorText};
  }

  .tags {

    margin-left: ${props => props.theme.spacing(1.25)};

    @media(max-width: 767px) {
      margin-left: ${props => props.theme.spacing(1)}
    }

    ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    padding-top: 2px;

    @media(max-width: 767px) {
      padding-top: 8px;
    }

    li {
      font-size: ${props => props.theme.spacing(2.25)};
      color: ${props => props.theme.colors.primary};
      font-weight: 550;
      margin-right: ${props => props.theme.spacing(0.5)};

      @media(max-width: 767px) {
        font-size: ${props => props.theme.spacing(1.75)};
      }
    }
  }
  }
`

export default StyledTag;
