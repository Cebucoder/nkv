import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./banner.min.css";

import Banner1 from "./images/banner1.jpg";
import Banner2 from "./images/banner2.jpg";

function Banner() {
  return (
    <div className="banner_con">
      <div className="wrapper">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ dynamicBullets: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner_slider">
              <div className="banner_info">
                <h2>Sample Car Name</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, incidunt quae ex unde numquam fuga esse vero
                  laboriosam. Unde, officia!
                </p>
                <a href="javascript:;">Book Now</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_slider">
              <div className="banner_info">
                <h2>Sample Car Name 2</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, incidunt quae ex unde numquam fuga esse vero
                  laboriosam. Unde, officia!
                </p>
                <a href="javascript:;">Book Now</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_slider">
              <div className="banner_info">
                <h2>Sample Car Name 3</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, incidunt quae ex unde numquam fuga esse vero
                  laboriosam. Unde, officia!
                </p>
                <a href="javascript:;">Book Now</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
