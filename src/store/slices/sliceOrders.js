import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: 'orders',
    initialState:{
        currentDetailInfo:{
            id:'',
            showComponent:false,
        },
        basketSections:{
            mainFood:{
                name: 'Основные блюда',
                placeholder: 'Вы ничего не выбрали из блюд. Нажмите, чтобы добавить.',
            },
            drinks: {
                name: 'Напитки',
                placeholder: 'Вы не выбрали ни один из напитков. Нажмите, чтобы добавить напиток.',
            }
        },
        ordersList:[
            {
                id: 1,
                totalPrice: 890,
                status: {id:1, name: 'complete'},
                date: '01.02.2022',
                positions:[
                    {
                        productId: 1,
                        name: 'Гирос',
                        count:3,
                        price: 180,
                        image: 'https://www.philips.ru/c-dam/b2c/ru_RU/marketing-catalog/ho/recipes/breakfast/giros/giros1.jpg',
                        options: [
                            {name:'перчик', active: false}
                        ],
                        type:"giros"
                    },
                    {
                        productId: 3,
                        name: 'Кола',
                        count:2,
                        price: 90,
                        image: 'https://www.philips.ru/c-dam/b2c/ru_RU/marketing-catalog/ho/recipes/breakfast/giros/giros1.jpg',
                        options: [],
                        type:"drink"
                    }
                ]
            },
            {
                id: 2,
                totalPrice: 890,
                status: {id:1, name: 'inProcess'},
                date: '01.02.2022',
                positions:[
                    {
                        productId: 1,
                        name: 'Гирос',
                        count:8,
                        price: 180,
                        image: 'https://www.philips.ru/c-dam/b2c/ru_RU/marketing-catalog/ho/recipes/breakfast/giros/giros1.jpg',
                        options: [
                            {name:'перчик', active: true}
                        ],
                        type:"giros"
                    }
                ]
            }
        ],
    },
    reducers: {
        addNewOrder(state, action){
            state.orders.push()
        },
        setCurrentDetailId(state, action){
            state.currentDetailInfo.id = action.payload.currentDetailId;
        },
        toggleModal(state, action){
            switch(action.payload){
                case 'on':
                    state.currentDetailInfo.showComponent = true;
                    break;
                case 'off':
                    state.currentDetailInfo.showComponent = false;
                    break;
                default:
                    state.currentDetailInfo.showComponent = !state.currentDetailInfo.showComponent;
                    break;
            } 
            
        },

    }
})

export default ordersSlice.reducer;

export const { addNewOrder, setCurrentDetailId,toggleModal } = ordersSlice.actions;