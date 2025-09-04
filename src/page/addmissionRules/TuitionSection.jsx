import React from "react";
import styled from "styled-components";

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
  return (
    <Container>
      <Title>Стоимость обучения</Title>
      <PricesWrapper>
        <Column>
          <Item>
            <Label>Школа</Label>
            <SubText>2-й и последующие дети - 10%</SubText>
            <Price>134 000 сом год</Price>
          </Item>
          <Item>
            <Label>Питание</Label>
            <SubText>Питание - 28 000 сом месяц</SubText>
          </Item>
        </Column>

        <Column>
          <Item>
            <Label>Дошкольное отделение</Label>
            <SubText>2-й и последующие дети - 10%</SubText>
            <Price>134 000 сом год</Price>
          </Item>
        </Column>
      </PricesWrapper>
    </Container>
  );
};

export default TuitionSection;
