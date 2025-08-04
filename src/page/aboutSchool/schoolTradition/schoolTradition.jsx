import React from 'react';
import schoolTraditionImage from "../../../assets/img/schoolTraditionImage.png";
import styled from "styled-components";
import {Container} from "../../../components/header/header";

const SchoolTraditionId = styled.section`
    padding: 100px 0;
`;

const SchoolTraditionClass = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`;

const SchoolTraditionTitle = styled.h1`
    font-weight: 400;
    font-size: 38px;
    line-height: 45px;
    color: #620C2C;
    width: 720px;
    padding: 0 0 54px 0;
    @media (max-width: 1440px) {
        width: 100%;
    }
    @media (max-width: 1200px) {
        font-size: 35px;
        padding: 0 0 40px 0;
    }
    @media (max-width: 992px) {
        font-size: 34px;
        padding: 0 0 40px 0;
        width: 100%;
    }
    @media (max-width: 768px) {
        font-size: 33px;
        padding: 0 0 35px 0;
        width: 100%;
        line-height: 42px;
    }
    @media (max-width: 576px) {
        font-size: 29px;
        padding: 0 0 30px 0;
        width: 100%;
        line-height: 38px;
    }
    @media (max-width: 450px) {
        font-size: 28px;
        padding: 0 0 30px 0;
        width: 100%;
        line-height: 37px;
    }
    @media (max-width: 400px) {
        font-size: 24px;
        padding: 0 0 30px 0;
        width: 100%;
        line-height: 34px;
    }
    @media (max-width: 375px) {
        font-size: 24px;
        padding: 0 0 25px 0;
        width: 100%;
        line-height: 34px;
    }
    @media (max-width: 320px) {
        font-size: 19px;
        padding: 0 0 25px 0;
        width: 100%;
        line-height: 30px;
    }
`;

const SchoolTraditionDescription = styled.p`
    font-weight: 400;
    font-size: 19px;
    color: #575757;
    width: 700px;
    line-height: 31px;
    @media (max-width: 1440px) {
        width: 100%;
    }
    @media (max-width: 1200px) {
        width: 95%;
        font-size: 18px;
    }
    @media (max-width: 1024px) {
        width: 95%;
        font-size: 18px;
        padding: 0 0 30px 0;
    }
    @media (max-width: 992px) {
        width: 100%;
        font-size: 18px;
        padding: 0 0 30px 0;
    }
    @media (max-width: 400px) {
        width: 100%;
        font-size: 17px;
        padding: 0 0 30px 0;
        line-height: 30px;
    }
    @media (max-width: 375px) {
        width: 100%;
        font-size: 17px;
        padding: 0 0 30px 0;
        line-height: 30px;
    }
    @media (max-width: 320px) {
        width: 100%;
        font-size: 15px;
        padding: 0 0 30px 0;
        line-height: 28px;
    }
`;

const SchoolTraditionText = styled.div`
    @media (max-width: 1440px) {
        width: 50%;
    }
    @media (max-width: 1024px) {
        width: 80%;
    }
    @media (max-width: 576px) {
        width: 90%;
    }
`;

const SchoolTraditionImage = styled.img`
    @media (max-width: 1200px) {
        width: 500px;
    }
    @media (max-width: 1024px) {
        width: 80%;
    }
    @media (max-width: 576px) {
        width: 90%;
    }
`;

const SchoolTradition = () => {
    return (
        <SchoolTraditionId id="schoolTradition">
            <Container className="container">
                <SchoolTraditionClass className="schoolTradition">
                    <SchoolTraditionText className="schoolTradition-text">
                        <SchoolTraditionTitle>Школа «Наши традиции» — это
                            комфортная и здоровая среда:
                            современное оснащение, медицинское
                            наблюдение, качественное питание,
                            творческая атмосфера в обучении.</SchoolTraditionTitle>
                        <SchoolTraditionDescription>Школа расположена в отдельно стоящем шестиэтажном здании площадью
                            2820 квадратных метров на охраняемой территории. На территории школы
                            есть игровая площадка и теннисный корт. Спортивный зал школы (площадь –
                            387 м²) и зал хореографии (площадь – 112 м²) оснащены современным
                            спортивным оборудованием и инвентарем. Столовая (площадь – 130 м²,
                            вместимость – 90 человек) оборудована всем необходимым для хранения и
                            приготовления пищи. Для проведения культурных мероприятий школа
                            использует актовый зал (площадь – 170 м², вместимость – 180 человек),
                            который полностью оснащен музыкальным, осветительным и театральным
                            оборудованием нового поколения, а также видео- и аудиотехникой.</SchoolTraditionDescription>
                    </SchoolTraditionText>
                    <SchoolTraditionImage src={schoolTraditionImage} alt="img"/>
                </SchoolTraditionClass>
            </Container>
        </SchoolTraditionId>
    );
};

export default SchoolTradition;