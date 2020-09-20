import React from 'react'
import styled from 'styled-components';
import {UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const MyPageBlock= styled.div`
    width:360px;
    height:590px;
    padding:20px;
    display:flex;
    flex-direction:column;

    @media screen and (min-width:768px){
        margin:0 auto;
    }
`;

const TtitleBlock=styled.div`
    width:100%;
    margin-top: 50px;
    h1{
        text-align:center;
        font-size: 24px;
        line-height: 28px;
        margin-bottom:2px;
    }
`;

const ProfileBlock = styled.div`
    width:100%;
    border-bottom: 1px solid #000000;
`;

const ProfileBox = styled.div`
    display:flex;
    margin-top:50px;
    margin-bottom:20px;
`;

const Image =styled.div`
    margin-right:5px;
`;

const ProfileName = styled.div`
    display:flex;
    flex-direction:column;
    button{
        width:130px;
        background: #C4C4C4;
        border-radius: 12px;
        border:none;
    }
    h2{
        width:100%;
        font-size: 20px;
        line-height: 23px;
    }
`;

const MyList = styled.div`

`;

const ListBlock = styled.div`
    margin-top:40px;
    border-bottom: 1px solid #000000;
    padding-bottom: 40px;
    h2{
        font-size: 18px;
        line-height: 21px;
        margin-bottom:20px;
    }
    h2:last-child{
        margin:0;
    }
`;

const LastBlock = styled.div`
    padding-top:20px;
    h2{
        font-size: 18px;
        line-height: 21px;
    }
`;
function MyPage() {
    return (
        <MyPageBlock>
            <TtitleBlock>
                <h1>마이페이지</h1>
                <hr/>
            </TtitleBlock>
            <ProfileBlock>
                <ProfileBox>
                    <Image>
                    <UserOutlined style={{fontSize: '90px'}}/>
                    </Image>
                    <ProfileName>
                        <h2>닉네임: 나야나</h2>
                        <Link to="/profile">
                        <button>프로필 편집</button>
                        </Link>
                    </ProfileName>
                </ProfileBox>
            </ProfileBlock>
            <MyList>
                <ListBlock>
                    <h2>내가 작성한 게시글1</h2>
                    <h2>내가 작성한 게시글1</h2>
                    <h2>내가 작성한 게시글1</h2>
                </ListBlock>
            </MyList>
            <LastBlock>
                <Link to="/option">
                <h2>설정</h2>
                </Link>
            </LastBlock>
        </MyPageBlock>
    )
}

export default MyPage
