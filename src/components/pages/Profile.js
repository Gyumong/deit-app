import React from 'react';
import styled from 'styled-components';
import {UserOutlined,CameraOutlined} from '@ant-design/icons';


const ProfileBlock = styled.div`
    width:360px;
    height:590px;
    padding:20px;
    display:flex;
    flex-direction:column;

    @media screen and (min-width:768px){
        margin:0 auto;
    }
`;

const ProfileMain = styled.div`
    margin-top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        font-size: 24px;
        line-height: 28px;
    }
`;
const ImageBlock = styled.div`
    width:90px;
    position:relative;
    margin-bottom:25px;
`;
const CamerBlock = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        background:#C4C4C4;
        width:40px;
        height:40px;
        bottom:0;
        right:0;
        border-radius:50%;
        border:none;
        transform:translate(25%,25%);
        background-repeat: no-repeat;
        position: absolute;
        &:hover{
            cursor:pointer;
        }
`;

const NickName = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    h2{
        font-size: 15px;
        line-height: 18px;
        text-align:left;
    }
`;

const InputBar = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom: 1px solid #000000;
    width:100%;
    padding-bottom:8px;
    input{
        outline:none;
        border:none;
    }
    button{
        width:45px;
        font-size: 15px;
        line-height: 18px;
        border:none;
        padding:5px;
        &:hover{
            cursor:pointer;
        }
    }
`;

const PhoneNum = styled(NickName)`
    padding-top:80px;
`;
function Profile() {
    return (
        <ProfileBlock>
            <ProfileMain>
                <h1>프로필 편집</h1>
                <ImageBlock>
                <UserOutlined style={{fontSize: '90px'}}/>
                <CamerBlock>
                <CameraOutlined style={{fontSize:'24px',zIndex:'100'}}/>
                </CamerBlock>
                </ImageBlock>
                <NickName>
                    <h2>닉네임</h2>
                    <InputBar>
                        <input type="name"/><button>변경</button>
                    </InputBar>
                </NickName>
                <PhoneNum>
                     <h2>휴대폰</h2>
                    <InputBar>
                        <input type="name"/><button>변경</button>
                    </InputBar>

                </PhoneNum>
            </ProfileMain>
        </ProfileBlock>
    )
}

export default Profile
