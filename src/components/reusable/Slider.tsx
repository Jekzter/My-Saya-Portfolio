import { Navigation, A11y, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

type SliderProps = {
    Item?: Array<string>
    className: string
}

export function Slider({ Item, className }: SliderProps) {
    return (
        <div className={className}>
            <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={24}
                slidesPerView={3}
                loop={true}
                speed={5000}
                allowTouchMove={false}
                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
                breakpoints={{
                    0: { spaceBetween: 24, slidesPerView: 2 },
                    640: { spaceBetween: 32, slidesPerView: 3 },
                    1024: { spaceBetween: 40, slidesPerView: 3 },
                }}
            >
                {Item?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex w-full py-2 items-center gap-2 rounded-2xl font-medium text-white drop-shadow-xl sm:gap-3"
                    >
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}