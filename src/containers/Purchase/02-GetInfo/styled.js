import styled from 'styled-components';
import media from 'utils/mediaquery';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 10px 0;
  ${media.tablet`width: 90%;`};

  form {
    width: 100%;
    max-width: 1400px;
    min-width: 350px;
    padding: 30px 30px;
    border-radius: 10px;
    background-color: #0088ab;
    border: 1px solid #fff;
    ${media.tablet`padding: 20px 10px;`};

    > h1 {
      text-align: center;
      margin-bottom: 25px;
      color: #fff;
    }

    > .spinner {
      display: flex;
      justify-content: center;
    }

    .ant-form-item:last-child {
      margin-bottom: 0;
    }

    .ant-form-item {
      margin-bottom: 5px;
    }

    label {
      color: #fff;
      line-height: 40px;
      font-weight: 400;
    }

    button {
      width: 100%;
      color: #fff;
      background-color: #00ffc6;
      border: none;
      :hover {
        background-color: #00ffc6;
      }
      :focus {
        background-color: #00ffc6;
      }
    }

    .back-btn {
      background-color: white !important;
      color: gray !important;
    }

    a {
      color: #50e3c2;
    }

    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
    ${media.tablet`
      box-shadow: none;
    `};
    .btn-container {
      display: flex;
      > button {
        margin: 10px;
      }
    }
    .question-icon {
      color: white;
    }
    .ant-form-item-label {
      text-align: left
    }
    .info-container {
      display: flex;
      ${media.tablet`display: block;`};
    }
    .info-column1 {
      flex: 1;
      padding-right: 20px;
      border-right: 1px solid white;
      ${media.tablet`padding-right: 0px;border-right: none;`};
    }
    .info-column2 {
      flex: 1;
      padding-left: 20px;
      ${media.tablet`padding-left: 0px;border-right: none;`};
    }
    .foreign-check {
      position: absolute;
      right: 51px;
      bottom: 11px;
    }
    .foreign-container {
      position: relative;
    }
    .total-euros {
      display: flex;
      color: white;
      margin-bottom: 20px;
      > div {
        flex: 1
        > i {
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }
  }

  > .change-link {
    margin-top: 20px;
  }
`;
