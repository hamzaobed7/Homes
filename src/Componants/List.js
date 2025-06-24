import { Container } from "react-bootstrap";
import "./List.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import data from "../slider.json";
import Cards from "./Card";

export default function List() {
  return (
    <section className="Swipper" id="residencies">
      <Container>
        <div className="titles">
          <h4>Best Choices</h4>
          <h2 style={{ color: "#007aff" }}>Popular Residencies</h2>
        </div>

        <Swiper style={{marginTop:"10px"}}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <Cards cart={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
