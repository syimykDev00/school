import React from 'react';
import aboutSchoolHeroBg from "../../../assets/img/aboutSchoolHeroBg.png";
import styled from "styled-components";
import {Container} from "../../../components/header/header";
import contactHeroImage from "../../../assets/img/contactHeroImage.png";

const ContactHeroId = styled.section`
    background: url(${aboutSchoolHeroBg}) no-repeat center/cover;
    min-height: 55vh;
`;

const ContactHeroClass = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0 74px 0;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const ContactHeroTitle = styled.h1`
    font-family: Inter, sans-serif;
    color: #620C2C;
    font-weight: 500;
    padding: 0 0 15px 0;
    font-size: 64px;
    @media (max-width: 1440px) {
        font-size: 62px;
    }
    @media (max-width: 1200px) {
        font-size: 57px;
    }
    @media (max-width: 1024px) {
        font-size: 56px;
    }
    @media (max-width: 992px) {
        font-size: 55px;
    }
    @media (max-width: 768px) {
        font-size: 52px;
    }
    @media (max-width: 576px) {
        font-size: 50px;
        width: 90%;
    }
    @media (max-width: 450px) {
        font-size: 45px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 400px) {
        font-size: 41px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 375px) {
        font-size: 41px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 320px) {
        font-size: 38px;
        width: 90%;
        margin: 0 auto;
    }
`;

const ContactHeroDescription = styled.p`
    font-family: Doloman Pavljenko, sans-serif;
    color: #000000;
    font-weight: 300;
    font-size: 34px;
    @media (max-width: 1440px) {
        font-size: 31px;
    }
    @media (max-width: 1200px) {
        font-size: 30px;
        width: 90%;
    }
    @media (max-width: 1024px) {
        font-size: 29px;
        width: 85%;
        padding: 0 0 25px 0;
    }
    @media (max-width: 992px) {
        font-size: 28px;
        width: 85%;
        padding: 0 0 25px 0;
    }
    @media (max-width: 768px) {
        font-size: 27px;
        width: 85%;
        padding: 0 0 25px 0;
    }
    @media (max-width: 576px) {
        font-size: 26px;
        width: 85%;
        //margin: 0 auto;
        padding: 0 0 25px 0;
    }
    @media (max-width: 450px) {
        font-size: 25px;
        width: 90%;
        margin: 0 auto;
        padding: 0 0 25px 0;
    }
    @media (max-width: 400px) {
        font-size: 23px;
        width: 90%;
        margin: 0 auto;
        padding: 0 0 20px 0;
    }
    @media (max-width: 375px) {
        font-size: 22px;
        width: 90%;
        margin: 0 auto;
        padding: 0 0 20px 0;
    }
    @media (max-width: 320px) {
        font-size: 21px;
        width: 85%;
        margin: 0 auto;
        padding: 0 0 20px 0;
    }
`;

const ContactHeroImage = styled.img`
    @media (max-width: 1440px) {
        width: 665px;
    }
    @media (max-width: 1200px) {
        width: 600px;
    }
    @media (max-width: 768px) {
        width: 580px;
    }
    @media (max-width: 576px) {
        width: 90%;
    }
`;

const ContactHero = () => {
    return (
        <ContactHeroId id="contactHero">
            <Container className="container">
                <ContactHeroClass className="contactHero">
                    <div className="contactHeroText">
                        <ContactHeroTitle>Контакты</ContactHeroTitle>
                        <ContactHeroDescription>Открыт прием на 2025\26 учебный год!</ContactHeroDescription>
                    </div>
                    <ContactHeroImage src={contactHeroImage} alt="img"/>
                </ContactHeroClass>
            </Container>
        </ContactHeroId>
    );
};

export default ContactHero;