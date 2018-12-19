import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import logoImage from 'assets/logo.png';

const Wrapper = styled(Layout.Header)`
  position: fixed;

  width: 100%;
  z-index: 100;
  top: 0;
  /* background: #0088ab !important; */
	height: 80px !important;
  line-height: 80px !important;

  .title-logo {
    float: left;
    margin-left: 30px;
  }
`;

export default () => {
  return (
    <Wrapper>
        <div className="title-logo">
            <img src={logoImage} alt="" />
        </div>
    </Wrapper>
  );
};
