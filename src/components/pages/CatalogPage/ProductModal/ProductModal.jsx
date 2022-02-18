import React from 'react';
import Counter from '../../../common/Counter/Counter';
import './ProductModal.scss';

const ProductModal = ({active, setActive, productId}) => {

    

	return (
		<div className={ active ? 'product-modal product-modal--active' : 'product-modal' } onClick={(e) =>{
			if(e.target === e.currentTarget)
				setActive(false);
		}}>
			<div className={active ? 'product-modal__content product-modal__content--active' : 'product-modal__content'}>
				
			<div className="product-modal__close">
                <i className="fal fa-times"></i>
            </div>
			<div className="swiper product-slider produc-slider-js">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img className="" src="/images/giros.jpg" alt="Гирос с курицей"/>
                  </div>
                  <div className="swiper-slide">
                    <img className="" src="/images/giros2.jpg" alt="Гирос с курицей"/>
                  </div>
                  <div className="swiper-slide">
                    <img className="" src="/images/giros3.jpg" alt="Гирос с курицей"/>
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>

			<div className="product-modal__info">
                <div className="product-modal__name">Гирос с курицей</div>
                <div className="product-modal__description">
                    Гирос относится к греческому фастфуду, но здоровой его версии. Ведь он приготовлен из выпеченной без масла мягкой питы, гриллованной куриной грудки, замаринованной в лимонном соке и ароматных травах, легкого йогуртового соуса и свежих овощей. Попробуйте эту версию, она вам обязательно понравится.
                    </div>
                
                <div className="product-modal__options">
                    <div className="product-modal__options-item">
                        <input className="product-modal__options-checkbox" type="checkbox" name="onion" value="лук" checked="true"/>
                        <div className="product-modal__options-name">Соус</div>
                    </div>
                    <div className="product-modal__options-item">
                        <input className="product-modal__options-checkbox" type="checkbox" name="onion" value="лук" checked="true"/>
                        <div className="product-modal__options-name">ЛУК</div>
                    </div>
                </div>
                
                <div className="product-modal__order">
                    <div className="product-modal__price">
                        200 <i className="fal fa-ruble-sign"></i>
                    </div>
                    <Counter />
                    <button className="product-modal__submit"><i className="fal fa-shopping-basket"></i></button>
                </div>
            </div>


			</div>
		</div>
	) 
};
export default ProductModal;
