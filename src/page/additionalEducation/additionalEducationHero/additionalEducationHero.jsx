import React from 'react';
import additionalEducation from "../additionalEducation";
import AdditionalEducation from "../additionalEducation";
import styled from "styled-components";
import aboutSchoolHeroBg from "../../../assets/img/aboutSchoolHeroBg.png";
import additionalEducationImage from "../../../assets/img/additionalEducationImage.png";
import {Container} from "../../../components/header/header";

const AdditionalEducationId = styled.section`
    background: url(${aboutSchoolHeroBg}) no-repeat center/cover;
    min-height: 55vh;
`;

const AdditionalEducationClass = styled.div`
    padding: 60px 0 74px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const AdditionalEducationTitle = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 64px;
    line-height: 70px;
    color: #620C2C;
    padding: 0 0 15px 0;    
    width: 513px;
    @media (max-width: 1440px) {
        width: 500px;
        font-size: 61px;
        line-height: 69px;
    }
    @media (max-width: 1200px) {
        width: 460px;
        font-size: 53px;
        line-height: 64px;
    }
    @media (max-width: 1024px) {
        width: 460px;
        font-size: 50px;
        line-height: 60px;
    }
    @media (max-width: 992px) {
        width: 460px;
        font-size: 49px;
        line-height: 59px;
    }
    @media (max-width: 768px) {
        width: 460px;
        font-size: 47px;
        line-height: 57px;
    }
    @media (max-width: 576px) {
        font-size: 42px;
        line-height: 52px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 450px) {
        font-size: 37px;
        line-height: 46px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 400px) {
        font-size: 33px;
        line-height: 42px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 375px) {
        font-size: 32px;
        line-height: 41px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 320px) {
        font-size: 28px;
        line-height: 37px;
        width: 90%;
        margin: 0 auto;
    }
`;

const AdditionalEducationDescription = styled.p`
    font-family: Doloman Pavljenko, sans-serif;
    font-weight: 300;
    font-size: 34px;
    line-height: 100%;
    @media (max-width: 1440px) {
        font-size: 32px;
    }
    @media (max-width: 1200px) {
        font-size: 29px;
        width: 90%;
    }
    @media (max-width: 1024px) {
        padding: 0 0 30px 0;
        font-size: 29px;
        width: 100%;
    }
    @media (max-width: 768px) {
        padding: 0 0 30px 0;
        font-size: 28px;
        width: 100%;
    }
    @media (max-width: 576px) {
        padding: 0 0 30px 0;
        font-size: 28px;
        width: 85%;
        margin: 0 auto;
        line-height: 35px;
    }
    @media (max-width: 450px) {
        padding: 0 0 25px 0;
        font-size: 25px;
        width: 85%;
        margin: 0 auto;
    }
    @media (max-width: 400px) {
        padding: 0 0 25px 0;
        font-size: 23px;
        width: 85%;
        margin: 0 auto;
        line-height: 32px;
    }
    @media (max-width: 375px) {
        padding: 0 0 25px 0;
        font-size: 22px;
        width: 85%;
        margin: 0 auto;
        line-height: 31px;
    }
    @media (max-width: 320px) {
        padding: 0 0 20px 0;
        font-size: 21px;
        width: 85%;
        margin: 0 auto;
        line-height: 30px;
    }
`;

const AdditionalEducationImage = styled.img`
    width: 660px;
    @media (max-width: 1200px) {
        width: 580px;
    }
    @media (max-width: 1024px) {
        width: 630px;
    }
    @media (max-width: 768px) {
        width: 530px;
    }
    @media (max-width: 576px) {
        width: 90%;
    }
`;

const AdditionalEducationHero = () => {
    return (
        <AdditionalEducationId id="additionalEducationHero">
            <Container className="container">
                <AdditionalEducationClass className="additionalEducationHero">
                    <div className="additionalEducationHeroText">
                        <AdditionalEducationTitle>Дополнительное
                            образование</AdditionalEducationTitle>
                        <AdditionalEducationDescription>Открыт прием на 2025\26 учебный год!</AdditionalEducationDescription>
                    </div>
                    <AdditionalEducationImage src={additionalEducationImage} alt="img"/>
                </AdditionalEducationClass>
            </Container>
        </AdditionalEducationId>
    );
};

export default AdditionalEducationHero;