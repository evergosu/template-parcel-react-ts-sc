import React from 'react';
import { hot } from 'react-hot-loader';
import styled, { createGlobalStyle } from 'styled-components';

const ApplicationStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Saira+Semi+Condensed");
 
  body {
    margin: 0;
    padding: 0;
    font-family: 'Saira Semi Condensed', sans-serif;
  }
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 100px;
  background-color: #194f2b;
`;

function Application(): JSX.Element {
  return (
    <>
      <ApplicationStyles />
      <Content>Hello, world</Content>
    </>
  );
}

export default hot(module)(Application);
