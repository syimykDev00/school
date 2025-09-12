import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchool } from "../../../store/schoolSlice";

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
  color: #620c2c;
  width: 720px;
  padding: 0 0 54px 0;
  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    font-size: 35px;
    padding: 0 0 40px 0;
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
  max-width: 600px;
  width: 100%;
  height: auto;
  /* border-radius: 16px; */
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    max-width: 500px;
  }
  @media (max-width: 1024px) {
    max-width: 80%;
  }
  @media (max-width: 576px) {
    max-width: 90%;
    border-radius: 12px;
  }
`;

const SchoolTradition = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.school);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSchool());
    }
  }, [dispatch, status]);

  // id=1 болгон элементти алуу
  //   const schoolInfo = data.find((item) => item.id === 6);
  const schoolInfo = data[0];

  if (!schoolInfo) {
    return <p>Элемент табылган жок</p>;
  }

  return (
    <SchoolTraditionId id="schoolTradition">
      <Container className="container">
        <SchoolTraditionTitle>{schoolInfo.title}</SchoolTraditionTitle>
        <SchoolTraditionClass className="schoolTradition">
          <SchoolTraditionText className="schoolTradition-text">
            <SchoolTraditionDescription>
              {schoolInfo.content}
            </SchoolTraditionDescription>
          </SchoolTraditionText>
          <SchoolTraditionImage src={schoolInfo.image} alt="img" />
        </SchoolTraditionClass>
      </Container>
    </SchoolTraditionId>
  );
};

export default SchoolTradition;
