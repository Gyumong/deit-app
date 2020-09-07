import React from 'react';
import MainPage from './components/pages/MainPage';
import Footer from './components/common/Footer';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

body{
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
  font-family: 'Noto Sans KR', sans-serif;
}
*{
  box-sizing: border-box;
  margin:0;
}

/*Reset CSS*/
a{
  color:inherit;
  text-decoration: none;
}
button,
input,
textarea{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
}
button:focus,
button:active,
input:focus,
input:active,
textarea:focus,
textarea:active{
  box-shadow: none;
  outline: none;
}
ul,
ol,
li{
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
}
`;



function App() {
  return (
    <>
      <GlobalStyles/>
      <MainPage/>

    </>
  )
}

export default App
