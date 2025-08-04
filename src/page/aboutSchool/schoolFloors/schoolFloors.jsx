import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/header/header";

const SchoolFloorsId = styled.section`
    padding: 90px 0 100px 0;
`;

const SchoolFloorsClass = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    @media (max-width: 1024px) {
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

const SchoolFloorsGroup = styled.div`
    padding: 0 0 20px 0;
    @media (max-width: 768px) {
        padding: 0 0 20px 0;
    }
    @media (max-width: 320px) {
        padding: 0 0 20px 0;
        width: 90%;
    }
`;

const SchoolFloorsTitle = styled.h1`
    font-weight: 400;
    font-size: 34px;
    color: #000000;
    padding: 0 0 20px 0;
    @media (max-width: 768px) {
        font-size: 33px;
    }
    @media (max-width: 576px) {
        font-size: 31px;
    }
    @media (max-width: 320px) {
        font-size: 29px;
    }
`;

const SchoolFloorsDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    width: 250px;
    @media (max-width: 1200px) {
        width: 235px;
        font-size: 19px;
    }
    @media (max-width: 576px) {
        width: 215px;
        font-size: 18px;
    }
    @media (max-width: 450px) {
        width: 215px;
        font-size: 18px;
        padding: 0 0 20px 0;
    }
    @media (max-width: 320px) {
        width: 215px;
        font-size: 17px;
        padding: 0 0 20px 0;
    }
`;

const SchoolFloors = () => {
    return (
        <SchoolFloorsId id="schoolFloors">
            <Container className="container">
                <SchoolFloorsClass className="schoolFloors">
                    <SchoolFloorsGroup className="schoolFloorsGroup">
                        <SchoolFloorsTitle>6 этажей</SchoolFloorsTitle>
                        <SchoolFloorsDescription>Отдельно стоящее здание
                            площадью 2820 м² расположено на
                            охраняемой территории</SchoolFloorsDescription>
                    </SchoolFloorsGroup>
                    <SchoolFloorsGroup className="schoolFloorsGroup">
                        <SchoolFloorsTitle>0,4 га</SchoolFloorsTitle>
                        <SchoolFloorsDescription>Площадь земельного
                            участка школы</SchoolFloorsDescription>
                    </SchoolFloorsGroup>
                    <SchoolFloorsGroup className="schoolFloorsGroup">
                        <SchoolFloorsTitle>90</SchoolFloorsTitle>
                        <SchoolFloorsDescription>Посадочных мест
                            в школьной столовой</SchoolFloorsDescription>
                    </SchoolFloorsGroup>
                    <SchoolFloorsGroup className="schoolFloorsGroup">
                        <SchoolFloorsTitle>180</SchoolFloorsTitle>
                        <SchoolFloorsDescription>Посадочных мест в
                            актовом зале</SchoolFloorsDescription>
                    </SchoolFloorsGroup>
                </SchoolFloorsClass>
            </Container>
        </SchoolFloorsId>
    );
};

export default SchoolFloors;