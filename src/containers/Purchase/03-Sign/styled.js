import styled from 'styled-components';
import media from 'utils/mediaquery';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 10px 0;

  form {
    width: 100%;
    max-width: 700px;
    min-width: 350px;
    padding: 40px 60px;
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
  }

  > .change-link {
    margin-top: 20px;
  }
`;
