/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// swiper slider
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import slider4 from "../../assets/slider-4.jpg";

const PropertyDetailsSlider = ({ image }) => {
  // for swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img className="h-[500px] w-full" src={image} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={slider4} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        <SwiperSlide>
          <img className="opacity-50" src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="opacity-50" src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="opacity-50" src={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="opacity-50" src={slider4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PropertyDetailsSlider;
