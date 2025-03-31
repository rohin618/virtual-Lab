export const apiRouters = {
    signIn:'/api/auth/signUp',
    login:'/api/auth/login',

    // course crud
    getAllCourse:'/api/courses',
    getCourse:(id)=>`/api/courses/${id}`,
    updateCourse:(id)=>`/api/courses/${id}`,
}