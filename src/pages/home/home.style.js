import styled from "styled-components";
import image from "../../assets/images/mine1.jpeg";
const bgcolor = "blueviolet";
export const HomeStyle = styled.div`
  .row-1 {
    background: skyblue;
    padding-bottom: 5rem;
    padding-top: 100px;
    text-align: center;
    color: white;
    position: relative;
    .social {
      position: absolute;
      top: 90px;
      left: 90px;

      .social-icon {
        margin: 10px 0;
      }
    }
    .text {
      margin: auto;
      font-size: 30px;

      .text-extra {
        color: ${bgcolor};
      }
    }

    .pix {
      width: 150px;
      height: 150px;
      background: white url(${image}) no-repeat;
      border-radius: 100%;
      background-position-y: -23px;
      background-position-x: -8px;
      margin: auto;
      line-height: 100px;
    }
  }
  .row-2 {
    background: #f7f7f7;
    box-shadow: 0px 2px 3px #efe7e7;
    width: 90%;
    margin: auto;
    border-radius: 10px;
    position: relative;
    top: -3em;
    padding-bottom: 3rem;

    .title {
      font-family: sans-serif;
      font-size: 30px;
      text-align: center;
      padding-bottom: 1em;
      padding-top: 10px;
      color: #383838;
    }
    .skills {
      .skills-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        .skill {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 10px;
          padding: 10px;
          border: solid 1px ${bgcolor};
          border-radius: 15px;
          background: white;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          &:hover {
            border: none;
            .skill-desc {
              display: flex;
            }
          }
          .skill-desc {
            display: none;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            /*background: #5e942d;*/
            background: ${bgcolor};
            color: white;
            margin-bottom: 0;
            text-align: center;
            border-radius: 10px;
            cursor: default;

            &-text {
              margin: 0;
            }
          }
        }
      }
    }
  }

  .row-3 {
    width: 90%;
    margin: auto;
    text-align: center;
  }
`;
