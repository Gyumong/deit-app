import React from 'react'
import styled from 'styled-components';
import {Row,Col} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import Footer from '../common/Footer';
import {Link} from 'react-router-dom';

const MainPageBlock= styled.div`
    width:360px;
    height:590px;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and (min-width:768px){
        margin:0 auto;
    }
`;
const LoginForm = styled.div`
    width:100px;
    height:60px;
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-top:70px;
    margin-left:240px;
    margin-bottom:40px;
    font-size: 12px;
    line-height: 14px;
`;

const ButtonBlock= styled.div`
    width:300px;
    height: 335px;
    display: flex;
    flex-direction:column;
    align-items:center;
    button{
        width:300px;
        height:65px;
        margin-bottom:25px;
        background: #C4C4C4;
        border-radius: 32.5px;
        font-size: 12px;
        line-height: 14px;
        border:none;
        &:hover{
            cursor:pointer;
        }
    }
`;
function MainPage() {
    return (
        <>
        <MainPageBlock>
            <Link to="/mypage">
            <LoginForm>
                <UserOutlined style={{fontSize: '50px'}}/>
                <div>로그인/회원가입</div>
            </LoginForm>
            </Link>
            <ButtonBlock>
                <Row>
                <Col md={24} xs={24}>
                <button>오늘의 이동거리</button>
                </Col>
                <Col md={24} xs={24}>
                <button>오늘의 식사 kcal</button>
                </Col>
                <Col md={12} xs={12}>
                <button style={{marginRight:"20px",width:"140px"}}>물 섭취량</button>
                </Col>
                <Col md={12} xs={12}>
                <button style={{width:"140px"}}>수면 시간</button>
                </Col>
                <Col md={24} xs={24}>
                <button style={{margin:0}}>오늘 나의 점수는?</button>
                </Col>
                </Row>
            </ButtonBlock>
        </MainPageBlock>
            </>
    )
}

export default MainPage;

