import Login from "./components/login/Login";
import SecuredComputingCourse from "./pages/course";
import HomePage from "./pages/homepage";

export const routeConfig = [
    {path:'/',component:HomePage,protected:true},
    {path:'/login',component:Login,protected:false},
    {path:'/course',component:SecuredComputingCourse,protected:true},
]