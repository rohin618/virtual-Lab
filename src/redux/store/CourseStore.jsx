// src/redux/store/CourseStore.js

import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../slice/CourseSlice'; 

const CourseStore = configureStore({
  reducer: {
    courses: courseReducer
  }
});

export default CourseStore;
