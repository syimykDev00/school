import React from "react";
import styled from "styled-components";
import { FaFilePdf } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 1024px) {
    padding: 0px;
    margin: 40px 0px 40px 0px;
  }
`;

const StepBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #6dd5fa;
  min-height: 230px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    min-height: auto;
    background-color: white;
    box-shadow: none;
  }
`;

const StepTitle = styled.h2`
  flex-shrink: 0;
  margin-right: 20px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 1);
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 34px;
  line-height: 120%;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const StepText = styled.p`
  color: #333;
  max-width: 600px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;

  @media (max-width: 1024px) {
    font-size: 16px;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background: white;
  color: #0077b6;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  transition: background 0.2s;

  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    background-color: rgba(103, 212, 255, 1);
  }
`;

const PdfButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;

  svg {
    font-size: 20px;
  }
`;

const StepsSection = () => {
  return (
    <Container>
      <StepBox>
        <StepTitle>1. Отправка заявки</StepTitle>
        <div>
          <StepText>
            Свяжитесь с нами по телефону: +996 500 600 605 или воспользуйтесь
            возможностью отправить заявку через интернет. Наши специалисты
            всегда готовы помочь вам, ответить на все вопросы и предложить
            наилучшие решения. Мы стремимся обеспечить максимально быстрый и
            качественный сервис для наших клиентов.
          </StepText>
          <Button>Оставить заявку</Button>
        </div>
      </StepBox>

      <StepBox>
        <StepTitle>2. Собеседование</StepTitle>
        <div>
          <StepText>
            Если для вашего ребенка найдется свободное место, специалисты
            свяжутся с вами по предоставленным контактным данным и пригласят на
            собеседование с психологом, логопедом и учителями. В течение 30-60
            минут, учитывая возрастные особенности ребенка, специалисты проведут
            беседу с ним. Педагоги предложат ребенку выполнить задания по
            математике, русскому и английскому языкам, соответствующие программе
            его будущего класса. Также сотрудник школы организует экскурсию для
            родителей, чтобы они смогли ознакомиться с учебным заведением.
          </StepText>
        </div>
      </StepBox>

      <StepBox>
        <StepTitle>3. Обратная связь</StepTitle>
        <div>
          <StepText>
            На основании собеседования специалисты выносят рекомендацию о приеме
            или отказе в обучении в школе "Наши традиции".
          </StepText>
        </div>
      </StepBox>

      <StepBox>
        <StepTitle>4. Заключение договора</StepTitle>
        <div>
          <StepText>
            При заключении договора предоставляется полный пакет документов.
            Договор вступает в силу после оплаты.
          </StepText>
          <PdfButton>
            <FaFilePdf /> PDF
          </PdfButton>
        </div>
      </StepBox>
    </Container>
  );
};

export default StepsSection;
