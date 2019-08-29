import React from 'react';

import { Container , Content, Nav } from './style';

export default function Header(){
    return (
        <Container>
            <Nav>
                <ul>
                    <li>
                        Item
                    </li>
                    <li>
                        Item
                    </li> 
                    <li>
                        Item
                    </li>
                    <li>
                        Item
                    </li>
                </ul>
            </Nav>
            <Content>
                <h1>header</h1>
            </Content>
        </Container>
    );
}