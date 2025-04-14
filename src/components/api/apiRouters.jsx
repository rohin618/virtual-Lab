export const apiRouters = {
    signIn:'/api/auth/signUp',
    login:'/api/auth/login',

    // code execution
    codeExecute:(id,problemOverviewId)=>`/api/code/run/${id}/${problemOverviewId}`,
    getPageDetail:(id)=>`/api/code/${id}`,

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