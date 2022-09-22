import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const addnotifuser=createAsyncThunk("usernotification/add",async(notification)=>{
    try {
      let result=axios.post("http://localhost:5000/userNotification/add",notification);
      return result;
    } catch (error) {
      console.log(error)
    }
  });

  export const getusernotification=createAsyncThunk("usernotification/get",async()=>{
    try {
      let result=axios.get("http://localhost:5000/userNotification/");
      return result;
    } catch (error) {
      console.log(error)
    }
  });
  export const updateusernoti=createAsyncThunk("usernotification/update",async({id})=>{
    try {
      let result=axios.put(`http://localhost:5000/userNotification/validate/${id}`);
      return result;
    } catch (error) {
      console.log(error)
    }
  })
  
  const initialState = {
    Usernotifications:null,
    status:null,
   }
export const notifcationSlice = createSlice({
  name: 'usernotification',
  initialState,
  reducers: {},
  extraReducers:{
    [addnotifuser.pending]:(state)=>{
        state.status="pending";
      },
      [addnotifuser.fulfilled]:(state)=>{
        state.status="fullfilled";
       
      },
      [addnotifuser.rejected]:(state)=>{
        state.status="rejected";
      },
      [getusernotification.pending]:(state)=>{
        state.status="pending";
      },
      [getusernotification.fulfilled]:(state,action)=>{
        state.status="fullfilled";
        state.Usernotifications=action.payload.data.usernotification;
      },
      [getusernotification.rejected]:(state)=>{
        state.status="rejected";
      },
      [updateusernoti.pending]:(state)=>{
        state.status="pending";
      },
      [updateusernoti.fulfilled]:(state)=>{
        state.status="fullfilled";
       
      },
      [updateusernoti.rejected]:(state)=>{
        state.status="rejected";
      },
  },
})

// Action creators are generated for each case reducer function

export default notifcationSlice.reducer