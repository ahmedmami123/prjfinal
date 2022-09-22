import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const addnotif=createAsyncThunk("notification/add",async(notification)=>{
    try {
      let result=axios.post("http://localhost:5000/notification/add",notification);
      return result;
    } catch (error) {
      console.log(error)
    }
  });

  export const getnotification=createAsyncThunk("notification/get",async()=>{
    try {
      let result=axios.get("http://localhost:5000/notification/");
      return result;
    } catch (error) {
      console.log(error)
    }
  });
  export const updatenoti=createAsyncThunk("notification/update",async({id})=>{
    try {
      let result=axios.put(`http://localhost:5000/notification/validat/${id}`);
      return result;
    } catch (error) {
      console.log(error)
    }
  })
  const initialState = {
    notifications:null,
    status:null,
   }
export const notifcationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers:{
    [addnotif.pending]:(state)=>{
        state.status="pending";
      },
      [addnotif.fulfilled]:(state)=>{
        state.status="fullfilled";
       
      },
      [addnotif.rejected]:(state)=>{
        state.status="rejected";
      },
      [getnotification.pending]:(state)=>{
        state.status="pending";
      },
      [getnotification.fulfilled]:(state,action)=>{
        state.status="fullfilled";
        state.notifications=action.payload.data.notification;
      },
      [getnotification.rejected]:(state)=>{
        state.status="rejected";
      },
      [updatenoti.pending]:(state)=>{
        state.status="pending";
      },
      [updatenoti.fulfilled]:(state)=>{
        state.status="fullfilled";
       
      },
      [updatenoti.rejected]:(state)=>{
        state.status="rejected";
      },
  },
})

// Action creators are generated for each case reducer function

export default notifcationSlice.reducer