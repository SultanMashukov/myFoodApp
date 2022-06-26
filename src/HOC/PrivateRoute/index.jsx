import useAuth from 'hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {

	const isAuth = useAuth();
	return isAuth ? children : <Navigate to="/signin"/>;
};
export default PrivateRoute;