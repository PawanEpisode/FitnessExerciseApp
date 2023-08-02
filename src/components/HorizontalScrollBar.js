import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          // spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          // spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          // spaceBetween: 30,
        },
        1440: {
          slidesPerView: 4,
          // spaceBetween: 30,
        },
      }}
      pagination={isBodyParts ? {
        clickable: true,
      }: ''}
      className="bodypartSlider"
    >
      {data?.map((item) => (
        <SwiperSlide key={item?.id || item} className="bodyPartSlide">
        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item}/>}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HorizontalScrollBar;
