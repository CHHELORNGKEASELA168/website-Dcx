// MekongSwiper component
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Style/Mekongswiper.css";

const MekongSwiper = () => {
    const slides = [
        {
            title: "Mekong Water Solutions",
            text: "The Australian Government initiative supporting the planning, development, and management of water resources and water sector systems",
            button: "Learn More →",
        },
        {
            title: "Sustainable Water Management",
            text: "The Australian Government initiative supporting the planning, development, and management of water resources and water sector systems",
            button: "Learn More →",
        },
        {
            title: "Regional Collaboration",
            text: "The Australian Government initiative supporting the planning, development, and management of water resources and water sector systems",
            button: "Learn More →",
        },
    ];

    return (
        <section className="Container-swiper-content">
            <div className="mekong-swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true 
                    }}
                    autoplay={{ 
                        delay: 4000, 
                        disableOnInteraction: false 
                    }}
                    loop={true}
                    className="mekong-swiper"
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            spaceBetween: 0,
                            slidesPerView: 1,
                        },
                        768: {
                            spaceBetween: 0,
                            slidesPerView: 1,
                        },
                        1024: {
                            spaceBetween: 0,
                            slidesPerView: 1,
                        },
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-content">
                                <h1>{slide.title}</h1>
                                <p>{slide.text}</p>
                                <button className="btn-Learn-swiper">{slide.button}</button>
                            </div>
                        </SwiperSlide>
                    ))}
                    
                    {/* Custom navigation buttons */}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </div>
        </section>
    );
};

export default MekongSwiper;