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
`;

const DirectorsAddressText = styled.div`
    padding: 0 0 0 120px;
`;

const DirectorsAddressTitle = styled.h1`
    font-weight: 400;
    font-size: 40px;
    color: #620C2C;
    padding: 0 0 20px 0;
`;

const DirectorsAddressDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #242424;
    width: 553px;
`;

const DirectorsAddress = () => {
    return (
        <DirectorsAddressId id="directorsAddress">
            <Container className="container">
                <DirectorsAddressClass className="directorsAddress">
                    <img src={directorsAddressImage} alt="img"/>
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