import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchool } from "../../../store/schoolSlice";

// ===== Styled Components =====
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
  color: #620c2c;
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
    font-size: 35px;
  }
  @media (max-width: 400px) {
    font-size: 33px;
  }
  @media (max-width: 375px) {
    font-size: 32px;
  }
  @media (max-width: 320px) {
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
    font-size: 18px;
    line-height: 25px;
    margin: 0 auto;
    width: 100%;
  }
  @media (max-width: 400px) {
    font-size: 17px;
    line-height: 24px;
    margin: 0 auto;
    width: 100%;
  }
  @media (max-width: 375px) {
    font-size: 17px;
    line-height: 24px;
    margin: 0 auto;
    width: 100%;
  }
  @media (max-width: 320px) {
    font-size: 16px;
    line-height: 24px;
    margin: 0 auto;
    width: 100%;
  }
`;

const DirectorsAddressImage = styled.img`
  max-width: 600px;
  width: 90%;
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

// ===== Component =====
const DirectorsAddress = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.school);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSchool());
    }
  }, [dispatch, status]);

  // Loading жана error статусун кошуп коёбуз
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>Маалымат жок</p>;
  }

  // Индекс менен тандоо (экинчи элемент)
  const schoolInfo = data[1];

  if (!schoolInfo) {
    return <p>Элемент табылган жок</p>;
  }

  return (
    <DirectorsAddressId id="directorsAddress">
      <Container className="container">
        <DirectorsAddressClass className="directorsAddress">
          <DirectorsAddressImage
            src={schoolInfo.image}
            alt={schoolInfo.title}
          />
          <DirectorsAddressText className="directorsAddressText">
            <DirectorsAddressTitle>{schoolInfo.title}</DirectorsAddressTitle>
            <DirectorsAddressDescription>
              {schoolInfo.content}
            </DirectorsAddressDescription>
          </DirectorsAddressText>
        </DirectorsAddressClass>
      </Container>
    </DirectorsAddressId>
  );
};

export default DirectorsAddress;
