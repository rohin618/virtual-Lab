import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import SecuredComputingCourse from "./pages/course";
import HomePage from "./pages/homepage";

export const routeConfig = [
    {path:'/',component:HomePage,protected:true},
    {path:'/login',component:Login,protected:false},
    {path:'/signup',component:SignUp,protected:false},
    {path:'/course',component:SecuredComputingCourse,protected:true},
]