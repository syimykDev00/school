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
`;

const SchoolFloorsTitle = styled.h1`
    font-weight: 400;
    font-size: 34px;
    color: #000000;
    padding: 0 0 20px 0;
`;

const SchoolFloorsDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    width: 250px;
`;

const SchoolFloors = () => {
    return (
        <SchoolFloorsId id="schoolFloors">
            <Container className="container">
                <SchoolFloorsClass className="schoolFloors">
                    <div className="schoolFloorsGroup">
                        <SchoolFloorsTitle>6 этажей</SchoolFloorsTitle>
                        <SchoolFloorsDescription>Отдельно стоящее здание
                            площадью 2820 м² расположено на
                            охраняемой территории</SchoolFloorsDescription>
                    </div>
                    <div className="schoolFloorsGroup">
                        <SchoolFloorsTitle>0,4 га</SchoolFloorsTitle>
                        <SchoolFloorsDescription>Площадь земельного
                            участка школы</SchoolFloorsDescription>
                    </div>
                    <div className="schoolFloorsGroup">
                        <SchoolFloorsTitle>90</SchoolFloorsTitle>
                        <SchoolFloorsDescription>Посадочных мест
                            в школьной столовой</SchoolFloorsDescription>
                    </div>
                    <div className="schoolFloorsGroup">
                        <SchoolFloorsTitle>180</SchoolFloorsTitle>
                        <SchoolFloorsDescription>Посадочных мест в
                            актовом зале</SchoolFloorsDescription>
                    </div>
                </SchoolFloorsClass>
            </Container>
        </SchoolFloorsId>
    );
};

export default SchoolFloors;