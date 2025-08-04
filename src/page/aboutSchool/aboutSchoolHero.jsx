import React from 'react';
import aboutSchoolImage from "../../assets/img/aboutSchoolImage.png"
import styled from "styled-components";
import aboutSchoolHeroBg from "../../assets/img/aboutSchoolHeroBg.png";
import {Container} from "../../components/header/header";

const AboutSchoolId = styled.section`
    background: url(${aboutSchoolHeroBg}) no-repeat center/cover;
    min-height: 55vh;
`;

const AboutSchoolHeroClass = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0 74px 0;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const AboutSchoolHeroTitle = styled.h1`
    font-family: Montserrat, sans-serif;
    color: #620C2C;
    padding-bottom: 14px;
    font-weight: 500;
    font-size: 50px;
    @media (max-width: 1200px) {
        font-size: 49px;
    }
    @media (max-width: 768px) {
        font-size: 46px;
    }
    @media (max-width: 576px) {
        font-size: 44px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 450px) {
        font-size: 42px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 400px) {
        font-size: 40px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 375px) {
        font-size: 39px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 320px) {
        font-size: 36px;
        width: 90%;
        margin: 0 auto;
    }
`;

const AboutSchoolHeroDescription = styled.p`
    font-family: Doloman Pavljenko, sans-serif;
    font-weight: 300;
    font-size: 33px;
    color: #FFFFFF;
    @media (max-width: 1440px) {
        font-size: 32px;
    }
    @media (max-width: 1200px) {
        font-size: 31px;
    }
    @media (max-width: 1024px) {
        padding: 0 0 20px 0;
    }
    @media (max-width: 768px) {
        font-size: 31px;
    }
    @media (max-width: 576px) {
        font-size: 31px;
        margin: 0 auto;
        width: 90%;
    }
    @media (max-width: 450px) {
        font-size: 29px;
        margin: 0 auto;
        width: 90%;
    }
    @media (max-width: 400px) {
        font-size: 28px;
        margin: 0 auto;
        width: 90%;
    }
    @media (max-width: 375px) {
        font-size: 27px;
        margin: 0 auto;
        width: 90%;
    }
    @media (max-width: 320px) {
        font-size: 24px;
        margin: 0 auto;
        width: 90%;
    }
`;

const AboutSchoolImage = styled.img`
    @media (max-width: 1440px) {
        width: 670px;
    }
    @media (max-width: 1200px) {
        width: 630px;
    }
    @media (max-width: 768px) {
        width: 560px;
    }
    @media (max-width: 576px) {
        width: 90%;
    }
`;

const AboutSchoolHero = () => {
    return (
        <AboutSchoolId id="aboutSchoolHero">
            <Container className="container">
                <AboutSchoolHeroClass className="aboutSchoolHero">
                    <div className="aboutSchoolTextGroup">
                        <AboutSchoolHeroTitle>О школе </AboutSchoolHeroTitle>
                        <AboutSchoolHeroDescription>Открыт прием на 2025\26 учебный год!</AboutSchoolHeroDescription>
                    </div>
                    <AboutSchoolImage src={aboutSchoolImage} alt="img"/>
                </AboutSchoolHeroClass>
            </Container>
        </AboutSchoolId>
    );
};

export default AboutSchoolHero;