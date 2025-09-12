import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../../store/teachersSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
// import images from "../../../assets/img_teaching_staff/Rectangle 1627.png";
const AdministrationSlider = () => {
  const dispatch = useDispatch();
  const {
    data: teachers,
    status,
    error,
  } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  if (status === "loading") return <p>Жүктөлүүдө...</p>;
  if (status === "failed") return <p>Ката: {error}</p>;

  return (
    <Container>
      <Title>Учителя</Title>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teachers.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <Card>
              <Image src={teacher.photo} alt={teacher.name} />
              <Name>{teacher.name}</Name>
              <Position>{teacher.subject}</Position>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default AdministrationSlider;

const Container = styled.div`
  padding: 80px;
  @media (max-width: 729px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  color: #620c2c;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Card = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 500px; /* фиксированная высота для всех */
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

const Name = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const Position = styled.p`
  font-size: 14px;
  color: gray;
`;
