import React from 'react';
import './styles.scss';

const WebForm = ({fields}) => {
	
	return (
		<div className="form">
			<div className="form__title">
				Авторизация
			</div>
			<form className="form__inner">
				<div className="form__row">
					<div className="form__field">
						<input className="form__input js_clearable" type="text" placeholder=" " name="name" required/>
						<div className="form__fieldName"><i className="fal fa-user"></i> Имя<sup>*</sup></div>
						<div className="form__fieldError">Ошибка</div>
					</div>
					<div className="form__field">
						<input className="form__input js_clearable" type="tel" placeholder=" " name="phone" required/>
						<div className="form__fieldName"><i className="fal fa-phone-alt"></i> Номер телефона<sup>*</sup></div>
						<div className="form__fieldError">Ошибка</div>
					</div>
					<div className="form__field">
						<input className="form__input js_clearable" type="email" placeholder=" " name="email"/>
						<div className="form__fieldName"><i className="far fa-envelope"></i> Email</div>
						<div className="form__fieldError">Ошибка</div>
					</div>
					<div className="form__field">
						<textarea className="form__textarea js_clearable" type="text" placeholder=" " name="message" required></textarea>
						<div className="form__fieldName">Текст сообщения<sup>*</sup></div>
						<div className="form__fieldError">Ошибка</div>
					</div>
					<div className="form__field">
						<div className="form__privacy">
							<div className="form__privacyStyled">
								<input className="form__input form__privacyInput js_privacy_input" type="checkbox" name="privacy" required/>
							</div>
							<div className="form__privacyText">
								Соглашаюсь на <a className="form__privacyLink" href="#" target="_blank">обработку персональных данных</a>
							</div>
						</div>
						<div className="form__fieldError">Ошибка</div>
					</div>
				</div>
				<input type="submit" className="form__submit" value="Отправить"/>
			</form>
		</div>
	) 
};

export default WebForm;