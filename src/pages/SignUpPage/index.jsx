import React, {useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { signUpUser, clearState } from 'store/slices/sliceUser';


const SignUpPage = (props) => {
	const { register, handleSubmit , formState:{errors, isValid} } = useForm({mode: 'all'});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isError, isAuth } = useSelector(state => state.user);

	const onSubmit = (data) => {
		dispatch(signUpUser(data));
	};

	useEffect(() => {
		if (isAuth) {
			dispatch(clearState());
			navigate('/');
		}
		if (isError) {
			dispatch(clearState());
		}
	}, [isAuth, isError]);

	useEffect(() => {
		return () => {
			dispatch(clearState());
		};
	}, []);

	return (
		<div className="signInPage">
			<div className="signInPage__inner">
				<div className="form">
                    <div className="form__title">
						Регистрация
                    </div>
                    <form className="form__inner" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__row">
							<div className="form__field">
                                <input 
									className="form__input js_clearable" 
									type="text" 
									placeholder=" " 
									{
										...register("name",{
											required:'Имя обязательно к заполнению',
											minLength:{value: 5, message: 'Пароль не может быть меньше 5 символов'}
										})
									}/>
                                <div className="form__fieldName"><i className="fal fa-user"></i> Имя</div>
                                <div className="form__fieldError">{errors?.name?.message}</div>
                            </div>
                            <div className="form__field">
                                <input 
									className="form__input js_clearable" 
									type="email" 
									placeholder=" " 
									{...register("email",{required:'Поле email обязательно к заполнению'})}
								/>
                                <div className="form__fieldName"><i className="far fa-envelope"></i> Email</div>
                                <div className="form__fieldError">{errors?.email?.message}</div>
                            </div>
							<div className="form__field">
                                <input 
									className="form__input js_clearable" 
									type="password" 
									placeholder=" " 
									{
										...register("password",{
											required:'Поле пароль обязательно к заполнению',
											minLength:{value: 5, message: 'Пароль не может быть меньше 5 символов'}
										})
									}/>
                                <div className="form__fieldName"><i className="fal fa-key"></i> Пароль</div>
                                <div className="form__fieldError">{errors?.password?.message}</div>
                            </div>
                        </div>
						<div className="form__submitContainer">
							<input type="submit" className="form__submitBtn" value="Войти" disabled={!isValid}/>
						</div>
                        
                    </form>
                </div>
				<div className="loginPage__registration">
					Вы уже зерегистрированы?  <NavLink  className="loginPage__registrationLink" to="/signin">
						Авторизируйтесь
					</NavLink>
				</div>
			</div>
		</div>
	) 
};

export default SignUpPage;