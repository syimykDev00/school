import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Container} from "../../../components/header/header";

const MoreAboutSchoolId = styled.section`
    padding: 100px 0 50px 0;
`;

const MoreAboutSchoolTitle = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 64px;
    color: #620C2C;
    @media (max-width: 1200px) {
        font-size: 61px;
    }
    @media (max-width: 1024px) {
        font-size: 58px;
    }
    @media (max-width: 992px) {
        font-size: 56px;
    }
    @media (max-width: 768px) {
        font-size: 54px;
    }
    @media (max-width: 576px) {
        font-size: 52px;
    }
    @media (max-width: 450px) {
        font-size: 49px;
    }
    @media (max-width: 400px) {
        font-size: 45px;
    }
    @media (max-width: 375px) {
        font-size: 44px;
    }
    @media (max-width: 320px) {
        font-size: 41px;
    }
`;

const MoreAboutDescription = styled.p`
    font-family: Inter, sans-serif;
    width: 834px;
    padding: 20px 0 55px 0;
    font-weight: 400;
    font-size: 46px;
    line-height: 51px;
    @media (max-width: 1200px) {
        font-size: 44px;
        line-height: 50px;
    }
    @media (max-width: 1024px) {
        font-size: 42px;
        line-height: 49px;
        width: 814px;
    }
    @media (max-width: 992px) {
        font-size: 40px;
        line-height: 49px;
        width: 90%;
        padding: 20px 0 40px 0;
    }
    @media (max-width: 768px) {
        font-size: 39px;
        line-height: 48px;
        width: 90%;
        padding: 20px 0 40px 0;
    }
    @media (max-width: 576px) {
        font-size: 37px;
        line-height: 47px;
        width: 90%;
        padding: 20px 0 35px 0;
    }
    @media (max-width: 450px) {
        font-size: 35px;
        line-height: 45px;
        width: 90%;
        padding: 20px 0 35px 0;
    }
    @media (max-width: 400px) {
        font-size: 29px;
        line-height: 41px;
        width: 90%;
        padding: 20px 0 35px 0;
    }
    @media (max-width: 375px) {
        font-size: 28px;
        line-height: 40px;
        width: 90%;
        padding: 20px 0 32px 0;
    }
    @media (max-width: 320px) {
        font-size: 24px;
        line-height: 35px;
        width: 90%;
        padding: 20px 0 30px 0;
    }
`;

const MoreAboutButton = styled.button`
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 30px;
    color: white;
    background: #67D4FF;
    padding: 10px 14px;
    border-radius: 6px;
    transition: .4s;
    &:hover {
        background: #1d1d1d;
    }
    @media (max-width: 1024px) {
        font-size: 29px;
        padding: 10px 14px;
    }
    @media (max-width: 992px) {
        font-size: 28px;
        padding: 10px 14px;
    }
    @media (max-width: 768px) {
        font-size: 27px;
        padding: 10px 14px;
    }
    @media (max-width: 576px) {
        font-size: 26px;
        padding: 10px 14px;
    }
    @media (max-width: 576px) {
        font-size: 25px;
        padding: 10px 14px;
    }
    @media (max-width: 400px) {
        font-size: 23px;
        padding: 10px 14px;
    }
    @media (max-width: 375px) {
        font-size: 22px;
        padding: 10px 14px;
    }
    @media (max-width: 320px) {
        font-size: 20px;
        padding: 10px 14px;
    }
`;

const MoreAboutSchool = () => {
    return (
        <MoreAboutSchoolId id="moreAboutSchool">
            <Container className="container">
                <div className="moreAboutSchool">
                    <MoreAboutSchoolTitle>О школе</MoreAboutSchoolTitle>
                    <MoreAboutDescription>«Культура, история и традиции
                        кыргызского народа — это основа
                        нашего воспитания и образования.»</MoreAboutDescription>
                    <NavLink to={'/aboutSchool'}>
                        <MoreAboutButton>Подробнее о школе </MoreAboutButton>
                    </NavLink>
                </div>
            </Container>
        </MoreAboutSchoolId>
    );
};

export default MoreAboutSchool;