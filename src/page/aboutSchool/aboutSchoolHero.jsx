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
`;

const AboutSchoolHeroTitle = styled.h1`
    font-family: Montserrat, sans-serif;
    color: #620C2C;
    padding-bottom: 14px;
    font-weight: 500;
    font-size: 50px;
`;

const AboutSchoolHeroDescription = styled.p`
    font-family: Doloman Pavljenko, sans-serif;
    font-weight: 300;
    font-size: 34px;
    color: #FFFFFF;
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
                    <img src={aboutSchoolImage} alt="img"/>
                </AboutSchoolHeroClass>
            </Container>
        </AboutSchoolId>
    );
};

export default AboutSchoolHero;