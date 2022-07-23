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

export const OrdersAPI = {
    add(address, positions){
        return instance.post(
            `orders/add/`,{ address, positions}
        );
    },
    getAll(page = null){
        let params = ''
        if(page)
            params =`&page=${page}`;
        return instance.get(
            `orders/get_all/?limit=8${params}`,{}
        );
    },
    getDetail(orderId){
        return instance.post(
            `orders/get_detail/`,{ orderId }
        );
    },
}

export const CatalogAPI = {
    getAll(ids, page = null, category = null, name = null){
        let params = '';
        if(ids)
            params+=`&ids=${ids.join()}`;
        if(page)
            params+=`&page=${page}`;
        if(category)
            params+=`&category=${category}`;
        if(name)
            params+=`&name=${name}`;
        return instance.get(
            `catalog/get_all/?limit=8${params}`,{}
        );
    },

    getByIds(ids){
        const stringifyArray = ids.join();
        return instance.get(
            `catalog/get_all/?ids=${stringifyArray}`,{}
        );
    }
}