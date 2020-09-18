import React from 'react'
import styled from 'styled-components';

const MyPageBlock= styled.div`
    width:360px;
    height:640px;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and (min-width:768px){
        margin:0 auto;
    }
`;
function MyPage() {
    return (
        <MyPageBlock>
            마이페이지 
        </MyPageBlock>
    )
}

export default MyPage
