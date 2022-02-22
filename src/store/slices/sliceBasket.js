import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState:{
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
        basketItems: [
            {
                id: '2',
                name: 'Гирос',
                image: 'https://cdn3.top-shop.ru/18/59/normal_8ac20d0c44ea6abd0964afd6c80e5918.jpg',
                count: 2,
                price: 200,
                options:[
                    {name: 'Лук', removed: false},
                    {name: 'Перчик', removed: false},
                    {name: 'Горчица', removed: false}
                ],
                removeMark: false,
                type: 'mainFood'
            },
            {
                id: '3',
                name: 'Кока кола 0.5',
                image: 'https://vodovoz.ru/upload/iblock/338/338f369c752a0a009324d8a0d352fbf6.jpeg',
                count: 2,
                price: 75,
                options:'',
                removeMark: false,
                type: 'drink'
            },
            {
                id: '4',
                name: 'Кока кола 0.5',
                image: 'https://vodovoz.ru/upload/iblock/338/338f369c752a0a009324d8a0d352fbf6.jpeg',
                count: 2,
                price: 100,
                options:'',
                removeMark: false,
                type: 'drink'
            }
        ],
        basketPriceSumm: 0, //надо вычислять автоматом, может this?
        needDelivery: true,
        
    },
    reducers: {
        addItemToBasket(state, action){
            state.basketItems.push({
                id: action.payload.id,
                name: action.payload.name,
                image: action.payload.image,
                count: action.payload.count,
                price: action.payload.price,
                priceSum: action.payload.summ,
                options:'',
                removeMark: false,
            })
        },
        removeFromBasket(state, action){
            state.basketItems.find((item) => item.id === action.payload.id).removeMark = true;
        },
        restoreItemToBasket(state, action){
            state.basketItems.find((item) => item.id === action.payload.id).removeMark = false;
        },
        toggleDelivery(state, action){
            state.needDelivery = !state.needDelivery;
        },
        // setBasketPrice(state, action){
        //     state.basketPriceSumm = action.payload.sum;
        // }
    }
})

export default basketSlice.reducer;

export const {addItemToBasket, removeFromBasket, restoreItemToBasket, toggleDelivery} = basketSlice.actions;