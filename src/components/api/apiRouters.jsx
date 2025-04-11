export const apiRouters = {
    signIn:'/api/auth/signUp',
    login:'/api/auth/login',
    codeExecute:'/api/code/run',

    // course crud
    getAllCourse:'/api/courses',
    getCourse:(id)=>`/api/courses/${id}`,
    updateCourse:(id)=>`/api/courses/${id}`,
    addCourse:'/api/courses',

    //problemtopics
    getProblemTopicsByCourseId:(id)=>`/api/problemTopics/${id}`,
    addProblemTopic:`/api/problemTopics`,

    //problemtopicsoverviews
    getTopicOverviewBySlug:(id)=>`/api/problemTopicsOverview/${id}`,
    addTopicOverview:'/api/problemTopicsOverview',

    //problemsets
    getProblemSets:(id)=>`/api/problemSets/${id}`,
    addProblemSet:'/api/problemSets',

    //problems
    getProblemByProblemSetId: (id) => `/api/problem/${id}`,
    addProblem: `/api/problem`,
    updateProblem: `/api/problem`,




    // enroll the course api
    enrollConfirm:(courseId)=>`/api/userEnroll/${courseId}`,
    fetchAllCourse:'/api/userEnroll',



}