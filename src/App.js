import React from 'react';
import MainPage from './components/pages/MainPage';
import MyPage from './components/pages/MyPage';
import Profile from './components/pages/Profile';
import Option from './components/pages/Option';
import Footer from './components/common/Footer';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import {Route,Link,Switch} from 'react-router-dom';
import Test from './components/pages/Test';

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
    <Switch>
    <Route path="/" exact>
    <MainPage/>
    </Route>
    <Route path="/mypage">
      <MyPage/>
    </Route>
    <Route path="/test">
      <Test/>
    </Route>
    <Route path="/profile">
      <Profile/>
    </Route>
    <Route path="/option">
      <Option/>
    </Route>
    </Switch>
    <Footer/>
    </>
  )
}

export default App
