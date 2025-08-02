import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const HeaderId = styled.header`
    padding: 20px 0;
    position: sticky;
    z-index: 100;
    top: 0;
    background: white;
`;

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const HeaderGeneral = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLink = styled.a`
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 17px;
    color: #000000;
    padding: 0 25px;
    transition: .4s;
    &:hover {
        text-decoration: underline;
        color: royalblue;
    }
`;

const Header = () => {
    return (
        <HeaderId id="header">
            <Container className="container">
                <HeaderGeneral className="header">
                    <NavLink to={'/'}>
                        <h1>Logo</h1>
                    </NavLink>
                    <nav className="header-navbar">
                        <NavLink to={'/aboutSchool'}> <HeaderLink>О школе</HeaderLink> </NavLink>
                        <NavLink to={'/admission-rules'}> <HeaderLink>Правила приема</HeaderLink> </NavLink>
                        <NavLink to={'/teaching-staff'}> <HeaderLink>Пед.коллектив</HeaderLink> </NavLink>
                        <NavLink to={'/additional-education'}> <HeaderLink>Доп.образование</HeaderLink> </NavLink>
                        <NavLink to={'/contact'}> <HeaderLink>Контакты</HeaderLink> </NavLink>
                    </nav>
                </HeaderGeneral>
            </Container>
        </HeaderId>
    );
};

export default Header;