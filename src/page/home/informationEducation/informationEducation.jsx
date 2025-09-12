import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducation } from "../../../store/educationSlice";

// ===== Styled Components =====

const Section = styled.section`
  padding: 60px 0 70px 0;
`;

const Title = styled.h1`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: clamp(32px, 5vw, 64px);
  color: #620c2c;
  text-align: center;
  margin: 0 auto;
`;

const Description = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: clamp(23px, 4vw, 46px);
  line-height: 1.2;
  color: #000;
  padding: 20px 0 40px 0;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0 40px 0;
  width: 30%;

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`;

const CardText = styled.h3`
  font-family: Montserrat, sans-serif;
  color: #000;
  padding-top: 16px;
  font-weight: 500;
  font-size: 23px;
`;

// ===== Component =====

const InformationEducation = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.education);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEducation());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>Маалымат жок</p>;

  return (
    <Section id="informationEducation">
      <Container className="container">
        <Title>Дополнительное образование</Title>
        <Description>
          «Дополнительное образование помогает глубже понять культуру, историю и
          традиции кыргызского народа.»
        </Description>

        <Grid>
          {data.map((item) => (
            <Card key={item.id}>
              <CardImage src={item.image} alt={item.title} />
              <CardText>{item.title}</CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default InformationEducation;
