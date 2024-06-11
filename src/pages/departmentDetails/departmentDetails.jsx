import MainTitle from "../../components/title/MainTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React, { useRef } from "react";
import "../industry/industry.css";
import { DoorsWood } from "../../components/data/DepartmentsPhoto";
import { DoorsIron } from "../../components/data/DepartmentsPhoto";
import { IronData } from "../../components/data/DepartmentsPhoto";
import { structuresData } from "../../components/data/DepartmentsPhoto";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DepartmentDetails = () => {
  return (
    <>
      <IndustrySection />
    </>
  );
};
function IndustrySection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="industry-section">
      <MainTitle text={"الابواب الخشب"} />
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {DoorsWood.map((src) => (
            <SwiperSlide>
              {" "}
              <img src={process.env.PUBLIC_URL + src} alt="industry" />
            </SwiperSlide>
          ))}

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
export default DepartmentDetails;
