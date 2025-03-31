import CourseListEdit from "./admin/adminpages/adminCourse/CourseListEdit";
import CourseListPage from "./admin/adminpages/adminCourse/CourseListPage";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import CourseDescription from "./pages/coursedescription/CourseDescription";
import Course from "./pages/coursepage/Course";
import ExplorePage from "./pages/explorepage/ExplorePage";

import HomePage from "./pages/homepage";
import ProblemDetail from "./pages/problemDetailPage/ProblemDetail";

export const routeConfig = [
    {path:'/',component:HomePage,protected:true,role:'ADMIN'},
    {path:'/login',component:Login,protected:false,role:'ADMIN'},
    {path:'/signup',component:SignUp,protected:false,role:'ADMIN'},
    {path:'/explore',component:ExplorePage,protected:true,role:'USER'},
    {path:'/problemSets',component:Course,protected:true,role:'USER'},
    {path:'/problem',component:ProblemDetail,protected:true,role:'USER'},
    {path:'/courseDescription',component:CourseDescription,protected:true,role:'USER'},


    // Admin Pages
    {path:'/coursePageAdmin',component:CourseListPage,protected:true,role:'ADMIN'},
    {path:'/coursePageAdminEdit/:slug',component:CourseListEdit,protected:true,role:'ADMIN'},
]