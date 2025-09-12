// InformationEducation.jsx
import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducation } from "../../../store/educationSlice";

const InformationEducationId = styled.section`
  padding: 60px 0 70px 0;
`;

const InformationEducationGeneral = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InformationEducationGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InformationGroupText = styled.h3`
  font-family: Montserrat, sans-serif;
  color: #000000;
  padding: 16px 0 0 0;
  font-weight: 500;
  font-size: 23px;
`;

const InformationEducationImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
`;

const InformationEducation = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.education);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEducation());
    }
  }, [dispatch, status]);

  return (
    <InformationEducationId id="informationEducation">
      <Container className="container">
        <div className="informationEducation">
          {status === "loading" && <p>Загрузка...</p>}
          {status === "failed" && <p>Ошибка: {error}</p>}

          <InformationEducationGeneral>
            {status === "succeeded" &&
              data.map((course) => (
                <InformationEducationGroup key={course.id}>
                  <InformationEducationImage
                    src={course.image}
                    alt={course.title}
                  />
                  <InformationGroupText>{course.title}</InformationGroupText>
                </InformationEducationGroup>
              ))}
          </InformationEducationGeneral>
        </div>
      </Container>
    </InformationEducationId>
  );
};

export default InformationEducation;
