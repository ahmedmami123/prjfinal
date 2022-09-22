import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/register", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/current",{headers:{
      Authorization:localStorage.getItem("token"),
    }});
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const updateuser=createAsyncThunk("user/update",async({id,Editprofil})=>{
  try {
    let result=axios.put(`http://localhost:5000/user/${id}`,Editprofil);
    return result;
  } catch (error) {
    console.log(error)
  }
});
export const deleteuser=createAsyncThunk("user/delete",async(id)=>{
  try {
    let result=axios.delete(`http://localhost:5000/user/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const getuser=createAsyncThunk("user/get",async()=>{
  try {
    let result=axios.get("http://localhost:5000/user/get");
    return result;
  } catch (error) {
    console.log(error)
  }
})
const initialState = {
  user: null,
  status: null,
  users:null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout:(state,action)=>{
      state.user=null;
      localStorage.removeItem("token")
    }
  },
  extraReducers: {
    [getuser.pending]:(state)=>{
      state.status="pending";
    },
    [getuser.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      state.users=action.payload.data.user;
    },
    [getuser.rejected]:(state)=>{
      state.status="rejected";
    },
    [userRegister.pending]:(state)=>{
      state.status="pending";
    },
    [userRegister.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      state.user=action.payload.data.user;
      localStorage.setItem("token",action.payload.data.token)

    },
    [userRegister.rejected]:(state)=>{
      state.status="rejected";
    },
    [userLogin.pending]:(state)=>{
      state.status="pending";
    },
    [userLogin.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      state.user=action.payload.data.user;
      localStorage.setItem("token",action.payload.data.token)

    },
    [userLogin.rejected]:(state)=>{
      state.status="rejected";
    },
    [userCurrent.pending]:(state)=>{
      state.status="pending";
    },
    [userCurrent.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      state.user=action.payload?.data.req;

    },
    [userCurrent.rejected]:(state)=>{
      state.status="rejected";
    },
    [updateuser.pending]:(state)=>{
      state.status="pending";
    },
    [updateuser.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      // state.user=action.payload?.data.req;

    },
    [updateuser.rejected]:(state)=>{
      state.status="rejected";
    },
    [deleteuser.pending]:(state)=>{
      state.status="pending";
    },
    [deleteuser.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [deleteuser.rejected]:(state)=>{
      state.status="rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const {logout} = userSlice.actions;

export default userSlice.reducer;
