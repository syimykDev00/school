import React from 'react';
import styled from "styled-components";
import bgImage from "../../../assets/img/heroBgImage.png"
import {Container} from "../../../components/header/header";

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
`;

const Hero = () => {
    return (
        <HeroId id="hero">
            <Container className="container">
                <HeroGeneral className="hero">
                    <HeroTitle>Индивидуальный
                        образовательный
                        маршрут </HeroTitle>
                    <HeroButton>Консультация</HeroButton>
                </HeroGeneral>
            </Container>
        </HeroId>
    );
};

export default Hero;