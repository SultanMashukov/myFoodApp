import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { toggleEditMode, updateUser } from 'store/slices/sliceUser';
import FetchLoadSpinner from 'components/FetchLoadSpinner';

const UserInfo = () => {
	
	const dispatch = useDispatch();
	const userData = useSelector( state => state.user );
	const { register, handleSubmit , formState:{errors, isValid} } = useForm({mode: 'all'});

	const onSubmit = (data) => {
		dispatch(updateUser(data));
	};

	const setEditMode = (val) => {
		dispatch(toggleEditMode(val))
	}


	if(userData.editMode){
		return (
			<form className="form__inner" onSubmit={handleSubmit(onSubmit)}>
				{userData.isUpdateFetching && <FetchLoadSpinner/>}
				<div className="form__row">
					<div className="form__field">
						<input
							className="form__input js_clearable" 
							type="text" 
							placeholder=" " 
							{
								...register("name",{
									required:'Имя обязательно к заполнению',
									minLength:{value: 5, message: 'Пароль не может быть меньше 5 символов'},
									value: userData.name
								})
							}/>
						<div className="form__fieldName"><i className="fal fa-user"></i> Имя</div>
						<div className="form__fieldError">{errors?.name?.message}</div>
					</div>
					<div className="form__field">
						<input 
							className="form__input js_clearable" 
							type="phone" 
							placeholder=" " 
							{...register("phone",{
								required:'Поле телефон обязательно к заполнению',
								value: userData.phone
							})}
						/>
						<div className="form__fieldName"><i className="fal fa-phone"></i> Телефон</div>
						<div className="form__fieldError">{errors?.phone?.message}</div>
					</div>
				</div>
				<div className="personal__userForm form__submitContainer">
					<input type="button" className="form__submitBtn" value="Отмена" onClick={()=>setEditMode('off')}/>
					<input type="submit" className="form__submitBtn" value="Сохранить" disabled={!isValid}/>
				</div>
				
			</form>
		)
	}

	return (
		<div className="userInfo">
			<div className="userInfo__row">
				<div className="userInfo__item">
					<div className="userInfo__userName">
						{userData.name}
					</div>
				</div>
				<div className="userInfo__item">
					<div className="userInfo__userEmail">
						<i className="far fa-envelope"></i> {userData.email}
					</div>
				</div>
				{
					userData.phone
					&&
					<div className="userInfo__item">
						<div className="userInfo__userPhone">
							<i className="fal fa-phone"></i> {userData.phone}
						</div>
					</div>
				}
				
				{
					userData.address.string 
					&& 
					<div className="userInfo__item">
						<div className="userInfo__userAddress">
							<i className="fal fa-map-marker-check"></i> {userData.address.string}
						</div>
					</div>
				}
				
			</div>
		</div>
	) 
};

export default UserInfo;