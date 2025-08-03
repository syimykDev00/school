import React from 'react';
import InformationImageOne from "./../../../assets/img/informationImageOne.png";
import InformationImageTwo from "./../../../assets/img/informationImageTwo.png";
import InformationImageThree from "./../../../assets/img/informationImageThree.png";
import InformationImageFour from "./../../../assets/img/informationImageFour.png";
import InformationImageFive from "./../../../assets/img/informationImageFive.png";
import InformationImageSix from "./../../../assets/img/informationImageSix.png";
import styled from "styled-components";
import {Container} from "../../../components/header/header";

const InformationEducationId = styled.section`
    padding: 60px 0 70px 0;
`;

const InformationEducationTitle = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 64px;
    color: #620C2C;
    @media (max-width: 1200px) {
        font-size: 61px;
    }
    @media (max-width: 1024px) {
        font-size: 60px;
    }
    @media (max-width: 992px) {
        font-size: 57px;
        width: 100%;
    }
    @media (max-width: 768px) {
        font-size: 55px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 576px) {
        font-size: 50px;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 450px) {
        font-size: 42px;
        width: 100%;
        margin: 0 auto;
    }
    @media (max-width: 400px) {
        font-size: 39px;
        width: 100%;
        margin: 0 auto;
    }
    @media (max-width: 375px) {
        font-size: 38px;
        width: 100%;
        margin: 0 auto;
    }
    @media (max-width: 320px) {
        font-size: 32px;
        width: 100%;
        margin: 0 auto;
    }
`;

const InformationEducationDescription = styled.p`
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 46px;
    line-height: 50px;
    color: #000000;
    padding: 20px 0 40px 0;
    @media (max-width: 1200px) {
        width: 100%;
        font-size: 44px;
    }
    @media (max-width: 1024px) {
        width: 100%;
        font-size: 42px;
        line-height: 49px;
    }
    @media (max-width: 992px) {
        width: 100%;
        font-size: 40px;
        line-height: 47px;
    }
    @media (max-width: 768px) {
        width: 90%;
        font-size: 38px;
        line-height: 46px;
        margin: 0 auto;
    }
    @media (max-width: 576px) {
        width: 90%;
        font-size: 36px;
        line-height: 44px;
        margin: 0 auto;
    }
    @media (max-width: 450px) {
        width: 100%;
        font-size: 33px;
        line-height: 41px;
        margin: 0 auto;
    }
    @media (max-width: 400px) {
        width: 100%;
        font-size: 29px;
        line-height: 37px;
        margin: 0 auto;
    }
    @media (max-width: 375px) {
        width: 100%;
        font-size: 27px;
        line-height: 36px;
        margin: 0 auto;
    }
    @media (max-width: 320px) {
        width: 100%;
        font-size: 23px;
        line-height: 33px;
        margin: 0 auto;
    }
`;

const InformationEducationGeneral = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        
    }
`;

const InformationEducationGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 0 40px 0;
    @media (max-width: 768px) {
        padding: 0 0 40px 0;
        width: 90%;
    }
    @media (max-width: 450px) {
        padding: 0 0 40px 0;
        width: 100%;
    }
`;

const InformationGroupText = styled.h3`
    font-family: Montserrat, sans-serif;
    color: #000000;
    padding: 16px 0 0 0;
    font-weight: 500;
    font-size: 23px;
`;

const InformationEducationImage = styled.img`
    @media (max-width: 1200px) {
        width: 100%;
        height: auto;
    }
    @media (max-width: 768px) {
        width: 80%;
        height: auto;
    }
    @media (max-width: 576px) {
        width: 90%;
        height: auto;
    }
`;

const InformationEducation = () => {
    return (
        <InformationEducationId id="informationEducation">
            <Container className="container">
                <div className="informationEducation">
                    <InformationEducationTitle>Дополнительное образование</InformationEducationTitle>
                    <InformationEducationDescription>«Дополнительное образование
                        помогает глубже понять культуру, историю и традиции
                        кыргызского народа.»</InformationEducationDescription>
                    <InformationEducationGeneral className="informationEducation-general">
                        <InformationEducationGroup className="informationEducation-group">
                            <InformationEducationImage src={InformationImageOne} alt="img"/>
                            <InformationGroupText>Информатика</InformationGroupText>
                        </InformationEducationGroup>
                        <InformationEducationGroup className="informationEducation-group">
                            <InformationEducationImage src={InformationImageTwo} alt="img"/>
                            <InformationGroupText>SMM</InformationGroupText>
                        </InformationEducationGroup>
                        <InformationEducationGroup className="informationEducation-group">
                            <InformationEducationImage src={InformationImageThree} alt="img"/>
                            <InformationGroupText>Рисование</InformationGroupText>
                        </InformationEducationGroup>
                        <InformationEducationGroup className="informationEducation-group">
                            <InformationEducationImage src={InformationImageFour} alt="img"/>
                            <InformationGroupText>Танцы</InformationGroupText>
                        </InformationEducationGroup>
                        <InformationEducationGroup className="informationEducation-group">
                            <InformationEducationImage src={InformationImageFive} alt="img"/>
                            <InformationGroupText>Шахматы</InformationGroupText>
                        </InformationEducationGroup>
                        <InformationEducationGroup className="informationEducation-group">
                            <InformationEducationImage src={InformationImageSix} alt="img"/>
                            <InformationGroupText>Гитара</InformationGroupText>
                        </InformationEducationGroup>
                    </InformationEducationGeneral>
                </div>
            </Container>
        </InformationEducationId>
    );
};

export default InformationEducation;