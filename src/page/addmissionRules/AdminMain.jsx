import styled from "styled-components";
import teachingStaffImages from "../../assets/img_teaching_staff/Rectangle 20.png";
import teachingStaffImagesbackground from "../../assets/img_teaching_staff/heroteaching.png";
const TEACHINGBG = styled.div`
  background-image: ${(props) => `url(${props.bs})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 55vh;
  @media (max-width: 1024px) {
    min-height: 25vh;
  }
`;

const THEMAINSTAFFSTYLED = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;
  padding: 60px 0px;
  margin: 0px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 0%;
    padding: 50px 20px;
  }

  @media (max-width: 948px) {
    gap: 30px;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
`;

const PEDAGOGICALTEXT = styled.h1`
  font-family: Inter;
  font-weight: 500;
  font-size: 64px;
  line-height: 1.1;
  color: rgba(98, 12, 44, 1);
  max-width: 537px;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 54px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const RECEPTIONOPEN = styled.p`
  font-weight: 300;
  font-size: 24px;
  line-height: 1.3;
  color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  max-width: 506px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 100%;

  img {
    width: 100%;
    height: auto;
    max-width: 500px;

    @media (max-width: 1200px) {
      max-width: 400px;
    }

    @media (max-width: 768px) {
      max-width: 350px;
    }

    @media (max-width: 480px) {
      max-width: 300px;
    }
  }
`;

const AdminMain = () => {
  return (
    <>
      <TEACHINGBG bs={teachingStaffImagesbackground}>
        <THEMAINSTAFFSTYLED>
          <div>
            <PEDAGOGICALTEXT>Правила приема</PEDAGOGICALTEXT>
            <RECEPTIONOPEN>Открыт прием на 2025/26 учебный год!</RECEPTIONOPEN>
          </div>

          <ImageWrapper>
            <img src={teachingStaffImages} alt="Teaching Staff" />
          </ImageWrapper>
        </THEMAINSTAFFSTYLED>
      </TEACHINGBG>
    </>
  );
};

export default AdminMain;
