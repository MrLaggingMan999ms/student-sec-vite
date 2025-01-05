import { configureStore } from '@reduxjs/toolkit'
import StudentReducer from '../features/student/StudentSlice'

export default configureStore({
  reducer: {
    student: StudentReducer,
  }
})