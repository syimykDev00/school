import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchTuition } from "../../store/GetPriceSlice";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #6d0019; /* бордовый цвет как на скрине */
`;

const PricesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 280px;
`;

const Item = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const SubText = styled.p`
  font-size: 14px;
  color: #444;
  margin: 0;
`;

const Price = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: red;
  margin-top: 5px;
`;

const TuitionSection = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.price);

  useEffect(() => {
    dispatch(fetchTuition());
  }, [dispatch]);

  if (status === "loading") return <p>Жүктөлүүдө...</p>;
  if (status === "failed") return <p>Ката: {error}</p>;

  const firstColumn = data.filter(
    (item) => item.title === "Школа" || item.title === "Питание"
  );
  const secondColumn = data.filter(
    (item) => item.title === "Дошкольное отделение"
  );

  return (
    <Container>
      <Title>Стоимость обучения</Title>
      <PricesWrapper>
        <Column>
          {firstColumn.map((item) => (
            <Item key={item.id}>
              <Label>{item.title}</Label>
              {item.note && <SubText>{item.note}</SubText>}
              <Price>{Number(item.amount).toLocaleString("ru-RU")} сом</Price>
            </Item>
          ))}
        </Column>

        <Column>
          {secondColumn.map((item) => (
            <Item key={item.id}>
              <Label>{item.title}</Label>
              {item.note && <SubText>{item.note}</SubText>}
              <Price>{Number(item.amount).toLocaleString("ru-RU")} сом</Price>
            </Item>
          ))}
        </Column>
      </PricesWrapper>
    </Container>
  );
};

export default TuitionSection;
