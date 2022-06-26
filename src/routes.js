import BasketPage from "pages/BasketPage";
import CatalogPage from "pages/CatalogPage";
import OrdersPage from "pages/OrdersPage";
import PersonalPage from "pages/PersonalPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";

export const publicRoutes = [
    {
        path:'/',
        component: CatalogPage
    },
    {
        path:'/catalog/',
        component: CatalogPage
    },
    {
        path:'/catalog/:category',
        component: CatalogPage
    },
    {
        path:'/signin/',
        component: SignInPage
    },
    {
        path:'/signup/',
        component: SignUpPage
    },
    {
        path:'/basket/',
        component: BasketPage
    },
]

export const privateRoutes = [
    {
        path:'/personal/',
        component: PersonalPage
    },
    {
        path:'/personal/orders',
        component: OrdersPage
    },
]