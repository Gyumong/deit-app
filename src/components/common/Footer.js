import React from 'react'
import styled from 'styled-components';
import {HomeOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {Link} from 'react-router-dom';

const FooterBlock= styled.div`
    color:black;
    width: 340px;
    margin-left:300px;
    @media screen and (min-width:768px){
        margin:0 auto;
    }
`;

const ButtonBar= styled.div`
    display: flex;
    justify-content:space-between;
    align-items:flex-end;
    height: 50px;
    width: 100%;
    padding-bottom:5px;
    Button{
        display:flex;
        justify-content:center;
        align-items:center;
        padding:0;
        width: 60px;
        height: 35px;
        font-size: 12px;
        line-height: 14px;
        border:1px solid black;
    }
`;

function Footer() {
    return (
        <FooterBlock>
            <ButtonBar>
            <Button>라이프로깅</Button>
            <Button>운동</Button>
            <Link to="/">
                <HomeOutlined style={{fontSize:"48px"}} />
            </Link>
            <Button>라이프로깅</Button>
            <Button>운동</Button>
            </ButtonBar>
        </FooterBlock>
    )
}

export default Footer
