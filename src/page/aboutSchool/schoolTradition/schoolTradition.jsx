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
`;

const SchoolTraditionTitle = styled.h1`
    font-weight: 400;
    font-size: 38px;
    line-height: 45px;
    color: #620C2C;
    width: 720px;
    padding: 0 0 54px 0;
`;

const SchoolTraditionDescription = styled.p`
    font-weight: 400;
    font-size: 19px;
    color: #575757;
    width: 700px;
    line-height: 31px;
`;

const SchoolTradition = () => {
    return (
        <SchoolTraditionId id="schoolTradition">
            <Container className="container">
                <SchoolTraditionClass className="schoolTradition">
                    <div className="schoolTradition-text">
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
                    </div>
                    <img src={schoolTraditionImage} alt="img"/>
                </SchoolTraditionClass>
            </Container>
        </SchoolTraditionId>
    );
};

export default SchoolTradition;