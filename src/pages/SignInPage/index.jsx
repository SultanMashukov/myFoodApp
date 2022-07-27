import React, {useEffect} from 'react';
import './styles.scss';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { signInUser, clearState } from 'store/slices/sliceUser';

const SignInPage = (props) => {
	const { register, handleSubmit ,   formState:{errors, isValid} } = useForm({mode: 'all'});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isAuth, isError } = useSelector(state => state.user);
	const [searchParams] = useSearchParams()
	const redirectFrom = searchParams.get('from')

	const onSubmit = (data) => {
		dispatch(signInUser(data));
	};

	useEffect(() => {
		if (isAuth) {
			dispatch(clearState());
			navigate( redirectFrom ? '/'+redirectFrom : '/');
		}
		if (isError) {
			dispatch(clearState());
		}
	}, [isAuth, isError, redirectFrom]);

	useEffect(() => {
		return () => {
			dispatch(clearState());
		};
	}, []);

	return (
		<div className="loginPage">
			<div className="loginPage__inner">
				<div className="form">
                    <div className="form__title">
						Авторизация
                    </div>
                    <form className="form__inner" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__row">
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
					У вас нет учетной записи?  <NavLink  className="loginPage__registrationLink" to="/signup">
						Зарегистрируйтесь
					</NavLink>
				</div>
			</div>
		</div>
	) 
};

export default SignInPage;