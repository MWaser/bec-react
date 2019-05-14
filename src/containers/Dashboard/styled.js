import styled from 'styled-components';
import media from 'utils/mediaquery';

export default styled.div`
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }
  
  .trigger:hover {
    color: #1890ff;
  }
  
  .logo {
    margin: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-layout-sider {
    min-height: 100vh;
  }

  .ant-layout-sider  {
    ${props => props.collapsed ? "flex: 0 0 80px !important;" : "flex: 0 0 250px !important;"}
    ${props => props.collapsed ? "max-width: 80px !important;" : "max-width: 250px !important;"}
    ${props => props.collapsed ? "min-width: 80px !important;" : "min-width: 250px !important;"}
    ${props => props.collapsed ? "width: 80px !important;" : "width: 250px !important;"}
  }

  .anticon-menu-unfold {
    ${media.mobile`display: none;`};
  }

  .ant-layout-sider {
    min-height: 100vh;
    background-color: #0088ab;
  }
  .ant-menu-item {
    background-color: #0088ab;
  }
  .ant-menu  {
    background-color: #0088ab;
  }
  .ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background-color: #0088ab;
  }
  .ant-menu:before, .ant-menu:after {
    content: '';
    display: block;
  }

  .item-container {
    display: flex;
    border-bottom: 1px solid gray;
    padding: 10px;
    > div {
      flex: 1
      font-size: 20px;
    }
  }

  .sub-container {
    min-width: 350px;
    max-width: 600px;
    width: 600px;
  }

  .dashboard {
    display: flex;
    justify-content: center;
  }

  .ant-form-item-label {
    text-align: left;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }

  .ant-form {
    text-align: center;
  }

  .note {
    margin: 20px 0;
    text-align: left;
  }

  .note2 {
    margin-bottom: 10px;
    margin-left: 50%;
    text-align: left;
    ${media.mobile`margin-left: 0;`};
  }

  .check-box {
    display: flex;
    margin-bottom: 10px;
    margin-left: 50%;
    margin-top: 10px;
    ${media.mobile`margin-left: 0;`};
  }

  .check-box2 {
    display: flex;
  }

  .help {
    font-size: 13px;
    margin-top: 20px;
    > a {
      color: #50e3c2;
      text-decoration: none;
    }
  }

  .test-btn {
    margin-top: 20px;
  }
  
  .form-item-inline-input-label {
    .ant-form-item-label {
      text-align: right;
      
      label {
        font-weight: normal;
      }
    }
  }
  
  .owned-units {
    border: 1px solid #888;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    
    .owned-units-title {
      font-size: 31px;
    }
    
    .owned-units-number {
      font-size: 84px;
    }
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .modal-container {
      width: 600px;
      max-width: 95%;
      max-height: 95%;
      border-radius: 10px;
      border: 5px solid #fff;
      padding: 40px;
      text-align: center;
      background: #0088a8;
      color: #fff;
      font-size: 16px;
      
      .modal-button {
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
        -webkit-text-decoration: none;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        font-family: 'Source Sans Pro',sans-serif;
        margin-top: 15px;
        margin-bottom: 25px;
        border: 0;
        
        .civic-logo-icon {
          position: absolute;
          top: 12px;
          left: 12px;
        }
        
        &:hover {
          background-color: #008C04;
        }
      }
      
      .back-link {
        font-size: 14px;
        
        i {
          margin-right: 5px;
        }
        
        a {
          color: #fff;
        }
      }
    }
  }
  
`;
