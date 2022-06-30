import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: 'http://localhost:5000/api/',
})

export const UserAPI = {
    signIn(email, password){
        return instance.post(
            `user/signin/`,
            {email, password}
        );
    },

    signUp(name,email,password){
        return instance.post(
            `user/signup/`,
            {name, email, password}
        );
    },

    authCheck(){
        return instance.post(
            `user/auth/`,{}
        );
    },

    update(name, email, phone){
        return instance.post(
            `user/update/`,{name, email, phone}
        );
    }
}