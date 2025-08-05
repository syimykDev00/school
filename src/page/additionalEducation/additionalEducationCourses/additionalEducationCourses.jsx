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