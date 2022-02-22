import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import './ProductSlider.scss';

const ProductSlider = ({imageURLs}) => {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            className='product-slider'
            autoHeight={true}
            navigation={true}
        >
            {imageURLs.map((url, id) => <SwiperSlide key={id}><img className="" src={url} alt="Гирос с курицей"/></SwiperSlide>)}
        </Swiper>
    );
};

export default ProductSlider;