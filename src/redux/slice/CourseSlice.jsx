// src/redux/slice/CourseSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiClient from '../../components/api/apiClients';
import { apiRouters } from '../../components/api/apiRouters';

// Async thunk to fetch all courses
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await apiClient.get(apiRouters.fetchAllCourse);
  console.log(response.data)
  return response.data;
});

const initialState = {
  courses: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default courseSlice.reducer;
