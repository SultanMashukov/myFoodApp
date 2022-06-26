import { useSelector } from "react-redux";

const useAuth = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    return isAuth;
}

export default useAuth;