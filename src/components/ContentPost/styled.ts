import styled from 'styled-components';

const StyledContentPost = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-left: 20px;

  margin-top: ${props => props.theme.spacing(5)};

  @media(max-width: 1024px) and (min-width: 768px) {
    width: 768px;
  };

  @media(max-width: 767px) {
    margin-top: ${props => props.theme.spacing(3)};
    padding-left: 0;
    width: 300px;
  }

  .content {

    margin-top: ${props => props.theme.spacing(3.75)};

    .titleSection {
      font-size: ${props => props.theme.spacing(4.5)};
      color: ${props => props.theme.colors.colorText};
      font-weight: 600;

      @media(max-width: 767px) {
        font-size: ${props => props.theme.spacing(3)}
      }
    }

    .textPost {
      margin-top: ${props => props.theme.spacing(2)};

      p {
        font-size: ${props => props.theme.spacing(2.25)};
        font-weight: 450;
        color: ${props => props.theme.colors.colorText};

        @media(max-width: 767px) {
          font-size: ${props => props.theme.spacing(1.75)}
        }
      }
    }

    .imgPost {

      margin-top: ${props => props.theme.spacing(4)};

      display: flex;
      flex-wrap: wrap;

      .img {
        margin-right: ${props => props.theme.spacing(3)};

        @media(max-width: 767px) {
          margin-right: ${props => props.theme.spacing(1)};

          img {
            max-width: 300px;
          }
        }
      }
    }
  }
`

export default StyledContentPost
