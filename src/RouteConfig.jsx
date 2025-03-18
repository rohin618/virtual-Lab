import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";

import HomePage from "./pages/homepage";

export const routeConfig = [
    {path:'/',component:HomePage,protected:true},
    {path:'/login',component:Login,protected:false},
    {path:'/signup',component:SignUp,protected:false},
]