import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background-color: #16111c;
    color: #fff;

    * {
        max-width: 1140px;
        width: 100%;
        margin: 0 auto;
    }

    ul {
        display: flex;
        flex-direction: row;
    }

    ul li{
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 10px 0;
    }
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 150px 0;
`;


export const Nav = styled.nav`

`;
