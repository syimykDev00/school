import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Container } from "../../../components/header/header";

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
    width: 398px;
    height: 518px;
    object-fit: cover;
    cursor: pointer;
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
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://school-project-2-q333.onrender.com/api/v1/extra-courses/?format=json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Ошибка HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setCourses(data);
            })
            .catch((err) => {
                console.error("❌ Ошибка запроса:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <InformationEducationId id="informationEducation">
            <Container className="container">
                <div className="informationEducation">
                    {loading ? (
                        <p></p>
                    ) : (
                        <InformationEducationGeneral>
                            {courses.map((course) => (
                                <InformationEducationGroup key={course.id}>
                                    <InformationEducationImage
                                        src={course.image}
                                        alt={course.png}
                                    />
                                    <InformationGroupText>{course.title}</InformationGroupText>
                                </InformationEducationGroup>
                            ))}
                        </InformationEducationGeneral>
                    )}
                </div>
            </Container>
        </InformationEducationId>
    );
};

export default InformationEducation;
