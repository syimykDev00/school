import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import images from "../../../assets/img_teaching_staff/Rectangle 1627.png";
const AdministrationSlider = () => {
  const people = [
    {
      id: 1,
      name: "Бакытбекова Гулина Канатбековна",
      position: "Директор",
      image: images, // замените на ваш путь
    },
    // можно дублировать для примера
    {
      id: 2,
      name: "Бакытбекова Гулина Канатбековна",
      position: "Директор",
      image: images,
    },
    {
      id: 3,
      name: "Бакытбекова Гулина Канатбековна",
      position: "Директор",
      image: images,
    },
    {
      id: 4,
      name: "Бакытбекова Гулина Канатбековна",
      position: "Директор",
      image: images,
    },
  ];

  return (
    <Container>
      <Title>Администрация</Title>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        // pagination={{ clickable: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {people.map((person) => (
          <SwiperSlide key={person.id}>
            <Card>
              <Image src={person.image} alt={person.name} />
              <Name>{person.name}</Name>
              <Position>{person.position}</Position>
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
  height: auto;
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
