import React,{useState} from 'react';
import styled from 'styled-components';
const OptionBlock = styled.div`
    width:360px;
    height:590px;
    padding:20px;
    display:flex;
    flex-direction:column;

    @media screen and (min-width:768px){
        margin:0 auto;
    }
`;

const TitleBlock = styled.div`
    margin-top:50px;
    h1{
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        margin-bottom:20px;
    }
    border-bottom: 1px solid #000000;
`;

const PushBarBlock = styled.div`
    padding:30px 0;
    border-bottom: 1px solid #000000;
`;

const PushBar = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 10px;
    h2{
        font-size: 18px;
        line-height: 21px;
    }
`;

const OnPush = styled.div`
    width:110px;
    height:30px;
    background:#13CE66;
    border-radius: 7px; 
    position:relative;
    &:hover{
        cursor:pointer;
    }
    transition: all 1s;
`;

const OnBar = styled.div`
    width:32px;
    height:32px;
    border-radius:50%;
    position:absolute;
    background:#fff;
    right:0;
`;

const OffPush = styled(OnPush)`
    background: #C4C4C4;
`;

const OffBar = styled(OnBar)`
    left:0;
    right:none;
`;

const LogBlock = styled.div`
    padding:30px 0;
    border-bottom: 1px solid #000000;
`;

const LogBar = styled.div`
    margin:0 10px;
    h2{
        font-size: 18px;
        line-height: 21px;
        margin-bottom:15px;
    }
    h2:last-child{
        margin:0;
    }
`;

const LastBlock = styled.div`
    padding-top:25px;
    padding-bottom:110px;
`;

const LastBar = styled(LogBar)`
    h2{
        margin-bottom:20px;
    }
`;
function Option() {
    const [On, setOn] = useState(true);

    return (
        <OptionBlock>
            <TitleBlock>
                <h1>설정</h1>
            </TitleBlock>
            <PushBarBlock>
                <PushBar>
                    <h2>푸쉬 알람 설정</h2>
                    {
                        On == true ?
                        <OnPush onClick={()=>{setOn(false)}}>
                            <OnBar/>
                        </OnPush>:
                        <OffPush onClick={()=>{setOn(true)}}>
                            <OffBar/>
                        </OffPush>
                    }
                    
                </PushBar>
            </PushBarBlock>
            <LogBlock>
                <LogBar>
                <h2>로그인/회원가입</h2>
                <h2>로그아웃</h2>
                <h2>회원탈퇴</h2>
                </LogBar>
            </LogBlock>
            <LastBlock>
                <LastBar>
                <h2>약관</h2>
                <h2>개인정보처리방침</h2>
                <h2>버전 정보</h2>
                </LastBar>
            </LastBlock>
        </OptionBlock>
    )
}

export default Option
