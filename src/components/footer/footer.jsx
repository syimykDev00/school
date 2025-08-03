import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Container} from "../header/header";

const FooterId = styled.footer`
    padding: 0 0 20px 0;
`;

const FooterClass = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const FooterGeneral = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 20px 0 0 0;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const FooterTextTitle = styled.h2`
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: #000000;
    padding: 0 0 12px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 400px) {
        font-size: 18px;
    }
`;

const FooterNavbar = styled.nav`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: 10px 0;
    }
`;

const FooterLink = styled.a`
    font-family: Montserrat, sans-serif;
    color: #000000;
    padding: 0 0 16px 0;
    font-weight: 500;
    font-size: 22px;
    transition: .4s;
    &:hover {
        text-decoration: underline;
        color: royalblue;
    }
    @media (max-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 400px) {
        font-size: 18px;
    }
`;

const FooterDescription = styled.p`
    font-family: Montserrat, sans-serif;
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    padding: 35px 0 0 0;
    @media (max-width: 1024px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        padding: 25px 0 0 0;
    }
`;

const Footer = () => {
    return (
        <FooterId id="footer">
            <Container className="container">
                <FooterClass className="footer">
                    <NavLink to={'/'}>
                        <h1>Logo</h1>
                    </NavLink>
                    <FooterGeneral className="footer-general">
                        <div className="footer-text">
                            <FooterTextTitle>+996709339443</FooterTextTitle>
                            <FooterTextTitle>info@nashitraditsii.kg</FooterTextTitle>
                            <FooterTextTitle>Бишкек, 12мкр.23\1</FooterTextTitle>
                            <FooterTextTitle>Пн-Пт: 9:00-21:00</FooterTextTitle>
                            <FooterTextTitle>Сб-9:00-19:00</FooterTextTitle>
                            <FooterTextTitle>Вс: Выходной</FooterTextTitle>
                        </div>
                        <FooterNavbar className="footer-navbar">
                            <NavLink to={'/aboutSchool'}> <FooterLink>О школе</FooterLink> </NavLink>
                            <NavLink to={'/admission-rules'}> <FooterLink>Правила приема</FooterLink> </NavLink>
                            <NavLink to={'/teaching-staff'}> <FooterLink>Педагогический <br/> коллектив</FooterLink> </NavLink>
                        </FooterNavbar>
                        <FooterNavbar className="footer-navbar">
                            <NavLink to={'/additional-education'}> <FooterLink>Дополнительное <br/> образование</FooterLink> </NavLink>
                            <NavLink to={'/contact'}> <FooterLink>Контакты</FooterLink> </NavLink>
                        </FooterNavbar>
                    </FooterGeneral>
                    <FooterDescription>© 2025, Автономная некоммерческая организация негосударственная общеобразовательная организация «Наши традиции»</FooterDescription>
                </FooterClass>
            </Container>
        </FooterId>
    );
};

export default Footer;