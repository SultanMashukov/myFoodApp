import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import './ProductSlider.scss';
import giros1 from '../../../../../images/giros.jpg';
import giros2 from '../../../../../images/giros2.jpg'
import giros3 from '../../../../../images/giros3.jpg'

const ProductSlider = (props) => {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            className='product-slider'
            autoHeight={true}
            navigation={true}
        >
            <SwiperSlide><img className="" src={giros1} alt="Гирос с курицей"/></SwiperSlide>
            <SwiperSlide><img className="" src={giros2} alt="Гирос с курицей"/></SwiperSlide>
            <SwiperSlide><img className="" src={giros3} alt="Гирос с курицей"/></SwiperSlide>
        </Swiper>
    );
};

export default ProductSlider;