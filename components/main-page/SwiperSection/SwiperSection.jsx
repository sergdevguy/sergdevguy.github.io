import React, { useRef } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css'
import s from './SwiperSection.module.scss';
// MUI
import Container from '@material-ui/core/Container';

SwiperCore.use([Navigation]);

export default function SwiperSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={s['swiper-section']}>
            <Container sx={{ padding: '30px' }}>
                <div>Это Свайпер</div>
                <div>Просто потому что могу</div>
            </Container>
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <div ref={prevRef}>Prev</div>
                <div ref={nextRef}>Next</div>
            </Swiper>
        </div>
    )
}