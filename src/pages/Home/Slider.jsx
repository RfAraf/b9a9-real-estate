import "animate.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import slider4 from "../../assets/slider-4.jpg";

const Slider = () => {
  return (
    <div>
      <div className="mt-5 animate__animated animate__slideInUp">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative bg-black rounded-2xl">
              <img
                className="w-full h-[500px] rounded-2xl opacity-60"
                src={slider1}
                alt=""
              />
              <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl font-bold text-white">Dream Realty</h1>
                <p className="text-white">
                  Embark on your journey to finding the perfect property with
                  Dream Realty. Explore our listings and let us help you turn
                  your real estate dreams into reality.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-black rounded-2xl">
              <img
                className="w-full h-[500px] rounded-2xl opacity-60"
                src={slider2}
                alt=""
              />
              <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl font-bold text-white">Elite Estates</h1>
                <p className="text-white">
                  Experience the epitome of luxury living with Elite Estates.
                  Explore our exclusive properties and elevate your lifestyle to
                  new heights.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-black rounded-2xl">
              <img
                className="w-full h-[500px] rounded-2xl opacity-60"
                src={slider3}
                alt=""
              />
              <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl font-bold text-white">
                  Prime Properties
                </h1>
                <p className="text-white">
                  Discover unparalleled opportunities in real estate with Prime
                  Properties. Find your ideal home or investment and embark on
                  your path to success.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-black rounded-2xl">
              <img
                className="w-full h-[500px] rounded-2xl opacity-60"
                src={slider4}
                alt=""
              />
              <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl font-bold text-white">Home Haven</h1>
                <p className="text-white">
                  Find your sanctuary with Home Haven, where every property is a
                  perfect match for your lifestyle and aspirations. Begin your
                  journey to finding your dream home today.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
