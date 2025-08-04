import React from 'react';
import directorsAddressImage from "./../../../assets/img/directorsAddressImage.png";
import styled from "styled-components";
import {Container} from "../../../components/header/header";

const DirectorsAddressId = styled.section`
    padding: 10px 0;
`;

const DirectorsAddressClass = styled.div`
    display: flex;
    align-items: start;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const DirectorsAddressText = styled.div`
    padding: 0 0 0 120px;
    @media (max-width: 1200px) {
        padding: 0 0 0 60px;    
    }
    @media (max-width: 1024px) {
        padding: 0 0 0 50px;
    }
    @media (max-width: 992px) {
        padding: 0 0 0 45px;
    }
    @media (max-width: 768px) {
        width: 80%;
        padding: 0 0 30px 0;
    }
    @media (max-width: 576px) {
        width: 80%;
        padding: 0 0 30px 0;
    }
    @media (max-width: 450px) {
        width: 90%;
        padding: 0 0 30px 0;
    }
`;

const DirectorsAddressTitle = styled.h1`
    font-weight: 400;
    font-size: 40px;
    color: #620C2C;
    padding: 0 0 20px 0;
    @media (max-width: 1024px) {
        font-size: 38px;
    }
    @media (max-width: 992px) {
        font-size: 37px;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
    }
    @media (max-width: 450px) {
        width: 100%;
        margin: 0 auto;
        font-size: 35px;
    }
    @media (max-width: 400px) {
        width: 100%;
        margin: 0 auto;
        font-size: 33px;
    }
    @media (max-width: 375px) {
        width: 100%;
        margin: 0 auto;
        font-size: 32px;
    }
    @media (max-width: 320px) {
        width: 100%;
        margin: 0 auto;
        font-size: 31px;
    }
`;

const DirectorsAddressDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #242424;
    width: 553px;
    @media (max-width: 1200px) {
        width: 503px;
    }
    @media (max-width: 1024px) {
        width: 483px;
    }
    @media (max-width: 992px) {
        width: 473px;
        font-size: 19px;
        line-height: 25px;
    }
    @media (max-width: 768px) {
        width: 100%;
        font-size: 19px;
        line-height: 25px;
        margin: 0 auto;
    }
    @media (max-width: 576px) {
        width: 100%;
        font-size: 19px;
        line-height: 25px;
        margin: 0 auto;
    }
    @media (max-width: 450px) {
        width: 100%;
        font-size: 18px;
        line-height: 25px;
        margin: 0 auto;
    }
    @media (max-width: 400px) {
        width: 100%;
        font-size: 17px;
        line-height: 24px;
        margin: 0 auto;
    }
    @media (max-width: 375px) {
        width: 100%;
        font-size: 17px;
        line-height: 24px;
        margin: 0 auto;
    }
    @media (max-width: 320px) {
        width: 100%;
        font-size: 16px;
        line-height: 24px;
        margin: 0 auto;
    }
`;

const DirectorsAddressImage = styled.img`
    @media (max-width: 1200px) {
        width: 400px;
    }
    @media (max-width: 1024px) {
        width: 350px;
    }
    @media (max-width: 992px) {
        width: 340px;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 450px) {
        width: 90%;
    }
`;

const DirectorsAddress = () => {
    return (
        <DirectorsAddressId id="directorsAddress">
            <Container className="container">
                <DirectorsAddressClass className="directorsAddress">
                    <DirectorsAddressImage src={directorsAddressImage} alt="img"/>
                    <DirectorsAddressText className="directorsAddressText">
                        <DirectorsAddressTitle>Обращение директора</DirectorsAddressTitle>
                        <DirectorsAddressDescription>
                            Дорогие друзья!
                            <br/>
                            <br/>
                            Я рада, что Вы на нашем сайте и знакомитесь со школой «Наши
                            традиции», которой в 2022 году исполнилось 27 лет! В названии школы
                            «Наши традиции» заключен большой смысл — сохранить лучшие
                            традиции российского образования, быть лидером всех инновационных
                            процессов в современном образовании страны, научить учащихся
                            учиться, а для этого нужно их просто любить и уважать! И тогда у нас всё получится!
                            <br/>
                            <br/>
                            Добро пожаловать!
                        </DirectorsAddressDescription>
                    </DirectorsAddressText>
                </DirectorsAddressClass>
            </Container>
        </DirectorsAddressId>
    );
};

export default DirectorsAddress;