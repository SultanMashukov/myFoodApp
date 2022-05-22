import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: 'orders',
    initialState:{
        modalIsActive: false,
        currentDetailId:'',
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
                price: 890,
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
                            {name:'перчик', active: true}
                        ],
                        type:"giros"
                    }
                ]
            },
            {
                id: 2,
                price: 890,
                status: {id:1, name: 'inProcess'},
                date: '01.02.2022',
                positions:[
                    {
                        productId: 1,
                        name: 'Гирос',
                        count:3,
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
            state.currentDetailId = action.payload.currentDetailId;
        },
        toggleModal(state){
            state.modalIsActive = !state.modalIsActive;
        },

    }
})

export default ordersSlice.reducer;

export const { addNewOrder, setCurrentDetailId,toggleModal } = ordersSlice.actions;