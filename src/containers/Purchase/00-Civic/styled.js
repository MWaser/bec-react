import styled from 'styled-components';
import media from 'utils/mediaquery';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 10px 0;

  form {
    width: 100%;
    max-width: 700px;
    min-width: 350px;
    padding: 40px 60px 30px 60px;
    ${media.tablet`padding: 20px 30px;`};
    border-radius: 10px;
    background-color: #0088ab;
    border: 1px solid #fff;

    > h1 {
      text-align: center;
      margin-bottom: 25px;
      color: #fff;
    }

    > .spinner {
      display: flex;
      justify-content: center;
    }

    .ant-form-item-control {
      display: flex;
      justify-content: center;
    }

    .ant-form-item:last-child {
      margin-bottom: 0;
    }

    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
    ${media.tablet`
      box-shadow: none;
    `};

    .civic-button {
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      max-width: 300px;
      height: 50px;
      line-height: 50px;
      padding: 0 50px 0 62px;
      border-radius: 100px;
      background-color: #3AB03E;
      color: #FFFFFF;
      font-size: 18px;
      font-weight: 400;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      font-family: 'Source Sans Pro', sans-serif;
      margin-top: 10px;
    }
    .civic-button:hover {
      background-color: #008C04;
    }
    .civic-button .civic-logo-icon {
      position: absolute;
      top: 12px;
      left: 12px;
    }
    .civic-cont {
      display: flex;
      justify-content: center
    }
    .form-explain {
      text-align: center;
      color: white;
      font-size: 16px;
    }
  }

  .change-link {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    i {
      margin-right: 5px;
    }
    a {
      color: white;
    }
  }
`;
