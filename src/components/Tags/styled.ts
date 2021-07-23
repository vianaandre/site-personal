import styled from 'styled-components';

const StyledTag = styled.section`
  margin-top: ${props => props.theme.spacing(4)};

  display: flex;
  align-items: center;

  h3 {
    font-size: ${props => props.theme.spacing(3)};
    font-weight: 600;
    color: ${props => props.theme.colors.colorText}
  }

  .tags {

    margin-left: ${props => props.theme.spacing(1.25)};

    ul {
    display: flex;
    padding: 0;
    padding-top: 2px;

    li {
      font-size: ${props => props.theme.spacing(2.25)};
      color: ${props => props.theme.colors.primary};
      font-weight: 550;
      margin-right: ${props => props.theme.spacing(1.25)};
    }
  }
  }
`

export default StyledTag;
