import { configureStore } from '@reduxjs/toolkit'
import IdeaSlice from './ideasslice/IdeaSlice'
import userSlice from './userSlice/userSlice'
import notifcationSlice from './notifcationSlice/notifcationSlice'
import UserNotificationSlice from './UserNotificationSlice/UserNotificationSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    idea:IdeaSlice,
    notification:notifcationSlice,
    usernotification:UserNotificationSlice,

  },
})