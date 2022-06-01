import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/bundle';

const SwiperPart=()=>{
    return (
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={1}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1 aqui va algo</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        ...
      </Swiper>
    );
  
  }

export default SwiperPart