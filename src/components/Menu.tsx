import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import BareContainer from './Container';

const MenuContainer = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
`;

const Container = styled(BareContainer)`
    display: flex;
    align-items: center;
    height: 100px;
`;

const Right = styled.div`
    margin-left: auto;
    
    a {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        margin-left: 25px;
        text-decoration: none;
        color: black;
        transition: border-color 0.2s ease;
        border-color: transparent;
        
        &:hover {
            border-bottom: 1px solid black;
        }
    }
`;

const Image = styled.img`
    height: 30px;
`;

export default function Menu() {
    return (
        <MenuContainer>
            <Container>
                <Link href="/">
                    <a><Image src="/logo.svg" /></a>
                </Link>
                <Right>
                    <Link href="/download" prefetch>
                        <a>Downloads</a>
                    </Link>
                    <a href="https://docs.aeon.technology">
                        Documentation
                    </a>
                    <a href="https://docs.aeon.technology/extending-aeon/reporting-issues">
                        Contributing
                    </a>
                </Right>
            </Container>
        </MenuContainer>
    );
}