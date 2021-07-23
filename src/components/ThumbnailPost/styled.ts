import styled from 'styled-components';

const StyledThumbnailPost = styled.div`
  margin-top: ${props => props.theme.spacing(9)};

  display: flex;
  padding-left: 152px;

  .back {

    z-index: 1000;
    margin-top: -10px;

    a {
      padding: 12px 12px;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 50%;
      margin-right: -20px;

    }
  }

  .imgThumb {
    img {
      width: 450px;
    }
  }

  .informationPost {

    margin-left: ${props => props.theme.spacing(2.5)};
    width: 450px;

    .tags {
      display: flex;

      li {
        font-size: ${props => props.theme.spacing(1.75)};
        color: ${props => props.theme.colors.white};

        padding: 2px 5px;
        background-color: ${props => props.theme.colors.primary};
        margin-right: ${props => props.theme.spacing(1)};
        border-radius: 5px;
        border: solid 2px;
        border-color: ${props => props.theme.colors.primary};
      }
    }

    h1 {
      font-size: ${props => props.theme.spacing(4.5)};
      color: ${props => props.theme.colors.colorText};
      font-weight: bold;
      margin-top: ${props => props.theme.spacing(4)};
    }

    .autorData {
      display: flex;
      align-items: center;
      margin-top: ${props => props.theme.spacing(2)};

      .divider {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.primary};
        margin: 0 10px;

      }
      span {
        font-size: ${props => props.theme.spacing(2.25)};
        font-weight: 400;
        color: ${props => props.theme.colors.colorText};
      }
    }
  }
`

export default StyledThumbnailPost;
