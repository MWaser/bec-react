import styled from 'styled-components';
import media from 'utils/mediaquery';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 10px 0;
  
  ${media.tablet`padding: 5px 0;margin: 0;`};

  form {
    width: 100%;
    max-width: 1400px;
    min-width: 350px;
    padding: 20px 50px;
    ${media.tablet`padding: 20px 30px;border-radius: 0px;`};
    border-radius: 10px;
    background-color: #0088ab;
    border: 1px solid #fff;

    > h1 {
      text-align: center;
      margin-bottom: 25px;
      color: #fff;
    }

    h4 {
      margin-bottom: 25px;
    }

    > .spinner {
      display: flex;
      justify-content: center;
    }

    .ant-form-item:last-child {
      margin-bottom: 0;
    }

    label {
      color: #fff;
      line-height: 40px;
      font-weight: 400;
    }

    button {
      width: 100%;
      color: #fff;
      background-color: #50e3c2;
      border: none;
      :hover {
        background-color: #50e3c2;
      }
      :focus {
        background-color: #50e3c2;
      }
    }

    .back-btn {
      color: white !important;
      margin: 10px;
      width: calc(100% - 20px);
    }

    a {
      color: #50e3c2;
    }

    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
    ${media.tablet`
      box-shadow: none;
    `};

    .justified {
        text-align: justify;
        margin-right: 20px;
    }
    .term-container {
      margin: 10px;
    }
    .payment-container {
      display: flex;
      flex-direction: row;
      ${media.tablet`
        flex-direction: column;
      `};
      > div {
        flex: 1;
        margin: 10px;
        ${media.tablet`
          margin: 0;
        `};
        > p {
          ${media.tablet`
            margin-right: 0;
          `};
        }
      }
      > div:first-child {
        border-right: 1px solid gray
        ${media.tablet`
          border-right: none
        `};
      }
      .info-item {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px 0;
        color: black;
        > div {
          flex: 1;
        }
        .business-address {
          display: flex;
          flex-direction: column;
          > div {
            display: flex;
            flex-direction: row;
            > div {
              flex: 1
            }
          }
        }
      }
    }
  }

  > .change-link {
    margin-top: 20px;
  }
`;
