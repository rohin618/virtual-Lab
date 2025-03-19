import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import CourseDescription from "./pages/coursedescription/CourseDescription";
import Course from "./pages/coursepage/Course";
import ExplorePage from "./pages/explorepage/ExplorePage";

import HomePage from "./pages/homepage";
import ProblemDetail from "./pages/problemDetailPage/ProblemDetail";

export const routeConfig = [
    {path:'/',component:HomePage,protected:true},
    {path:'/login',component:Login,protected:false},
    {path:'/signup',component:SignUp,protected:false},
    {path:'/explore',component:ExplorePage,protected:true},
    {path:'/problemSets',component:Course,protected:true},
    {path:'/problem',component:ProblemDetail,protected:true},
    {path:'/courseDescription',component:CourseDescription,protected:true},
]