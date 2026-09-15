// import type { JSX } from 'react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { type ReactNode } from 'react';

type SliderProps = {
    Item?: Array<string>,
    className: string
}

const Slider = ({ Item, className }: SliderProps) => {
    return (
        <div className={className}>
            <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                speed={5000}
                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            >
                {Item?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="text-white drop-shadow-xl font-medium rounded-2xl flex items-center gap-2"
                    >
                        <i className="ri-circle-fill pr-32 text-sm"></i>
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider;