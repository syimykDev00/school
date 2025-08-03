import React from 'react';
import styled from "styled-components";
import bgImage from "../../../assets/img/heroBgImage.png"
import {Container} from "../../../components/header/header";
import {NavLink} from "react-router-dom";

const HeroId = styled.section`
    background: url(${bgImage}) no-repeat center/cover;
    min-height: 100vh;
`;

const HeroTitle = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 64px;
    line-height: 72px;
    color: #620C2C;
    width: 569px;
    padding: 0 0 25px 0;
    @media (max-width: 1200px) {
        font-size: 61px;
        line-height: 70px;
    }
    @media (max-width: 1024px) {
        font-size: 60px;
        line-height: 70px;
    }
    @media (max-width: 992px) {
        font-size: 59px;
        line-height: 69px;
    }
    @media (max-width: 768px) {
        font-size: 58px;
        line-height: 68px;
    }
    @media (max-width: 576px) {
        font-size: 55px;
        line-height: 65px;
        width: 90%;
    }
    @media (max-width: 450px) {
        font-size: 43px;
        line-height: 53px;
        width: 90%;
    }
    @media (max-width: 400px) {
        font-size: 37px;
        line-height: 47px;
        width: 90%;
    }
    @media (max-width: 375px) {
        font-size: 36px;
        line-height: 46px;
        width: 90%;
    }
    @media (max-width: 320px) {
        font-size: 31px;
        line-height: 42px;
        width: 90%;
    }
`;

const HeroGeneral = styled.div`
    padding: 117px 0 0 0;
`;

const HeroButton = styled.button`
    font-weight: 500;
    font-size: 20px;
    padding: 15px 35px;
    color: white;
    background: #67D4FF;
    border-radius: 6px;
    transition: .4s;
    &:hover {
        background: #1d1d1d;
    }
    @media (max-width: 1200px) {
        font-size: 20px;
        padding: 14px 33px;
    }
    @media (max-width: 576px) {
        font-size: 19px;
        padding: 13px 32px;
    }
    @media (max-width: 450px) {
        font-size: 18px;
        padding: 13px 31px;
    }
    @media (max-width: 400px) {
        font-size: 16px;
        padding: 14px 30px;
    }
    @media (max-width: 375px) {
        font-size: 16px;
        padding: 14px 30px;
    }
    @media (max-width: 320px) {
        font-size: 15px;
        padding: 13px 28px;
    }
`;

const Hero = () => {

    const schoolNumber = +996509914101;

    return (
        <HeroId id="hero">
            <Container className="container">
                <HeroGeneral className="hero">
                    <HeroTitle>Индивидуальный
                        образовательный
                        маршрут </HeroTitle>
                    <NavLink to={`https://wa.me/${schoolNumber}?text=%20Саламатсызбы%20мен%20мектепке%20жазылайын%20дегем%20`}>
                        <HeroButton>Консультация</HeroButton>
                    </NavLink>
                </HeroGeneral>
            </Container>
        </HeroId>
    );
};

export default Hero;