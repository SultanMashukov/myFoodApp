import LoaderSpinner from 'components/LoaderSpinner';
import useAuth from 'hooks/useAuth';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
	//const isAuth = useAuth();
	const isAuth = useSelector(state => state.user.isAuth);
	const isFetching = useSelector(state => state.user.isFetching);
	if(isFetching)
		return <LoaderSpinner/>
	return isAuth ? children : <Navigate to="/signin"/>;
};
export default PrivateRoute;