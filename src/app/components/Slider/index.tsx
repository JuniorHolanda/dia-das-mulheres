'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperProps } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SswiperWrapper } from './swiper.styled';

interface SlideData {
    name: string;
    img: string;
    altImg: string;
}

interface MySwiperProps extends SwiperProps {
    slides: SlideData[];
}

export default function Slider({ slides }: MySwiperProps) {
    return (
        <SswiperWrapper>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 7000 }}
                speed={3000}
                loop
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={{ height: '100%' }}>
                        <h1>{slide.name}</h1>
                        <img src={slide.img} alt={slide.altImg} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SswiperWrapper>
    );
};