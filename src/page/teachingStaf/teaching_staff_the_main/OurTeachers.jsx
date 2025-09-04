import styled from "styled-components";

const OUTTEKTCONTAINER = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 40px;
  padding: 0 20px;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 0px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin-bottom: 40px;
  }
`;

const OurTeachersH1 = styled.h1`
  font-family: Inter;
  font-weight: 400;
  font-size: 38px;
  line-height: 100%;
  color: rgba(98, 12, 44, 1);
  margin: 77px 73px;
  /* text-align: center; */

  @media (max-width: 768px) {
    font-size: 32px;
    margin: 60px 20px 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin: 40px 20px 20px;
  }
`;

const PERCENTNUMBER = styled.h2`
  font-family: "Doloman Pavljenko", sans-serif;
  font-weight: 300;
  font-size: 34px;
  margin-bottom: 20px;
  /* text-align: center; */

  @media (max-width: 768px) {
    font-size: 28px;
    border-bottom: 1px solid rgba(103, 212, 255, 1);
  }

  @media (max-width: 480px) {
    font-size: 24px;
    border-bottom: 1px solid rgba(103, 212, 255, 1);
  }
`;

const TEKCTPARAGRAF = styled.p`
  font-family: "Doloman Pavljenko", sans-serif;
  font-weight: 300;
  font-size: 24px;
  width: 272px;
  /* text-align: center; */

  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const OurTeachers = () => {
  return (
    <div>
      <OurTeachersH1>Наши учителя</OurTeachersH1>
      <OUTTEKTCONTAINER>
        <div>
          <PERCENTNUMBER>70%</PERCENTNUMBER>
          <TEKCTPARAGRAF>Высшей категории</TEKCTPARAGRAF>
        </div>
        <div>
          <PERCENTNUMBER>40%</PERCENTNUMBER>
          <TEKCTPARAGRAF>Почетная грамота</TEKCTPARAGRAF>
          <TEKCTPARAGRAF>Почетный работник общего образования КР</TEKCTPARAGRAF>
        </div>
        <div>
          <PERCENTNUMBER>46%</PERCENTNUMBER>
          <TEKCTPARAGRAF>
            Работают в школе “Наши традиции” более 10 лет
          </TEKCTPARAGRAF>
        </div>
        <div>
          <PERCENTNUMBER>3 человека</PERCENTNUMBER>
          <TEKCTPARAGRAF>
            Кандидат педагогических наук, грант мэра Кыргызстана
          </TEKCTPARAGRAF>
        </div>
      </OUTTEKTCONTAINER>
    </div>
  );
};

export default OurTeachers;
