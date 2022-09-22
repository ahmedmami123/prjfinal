import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const getidea=createAsyncThunk("idea/get",async()=>{
  try {
    let result=axios.get("http://localhost:5000/idea/");
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const addidea=createAsyncThunk("idea/add",async(ideas)=>{
  try {
    let result=axios.post("http://localhost:5000/idea/add",ideas);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const deleteidea=createAsyncThunk("idea/delete",async(id)=>{
  try {
    let result=axios.delete(`http://localhost:5000/idea/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})

export const updatevote=createAsyncThunk("vote/update",async({id,ideas})=>{
  try {
    let result=axios.put(`http://localhost:5000/idea/vote/${id}`,ideas);
    return result;
  } catch (error) {
    console.log(error)
  }
})

export const updatelike=createAsyncThunk("like/update",async({id,ideas})=>{
  try {
    let result=axios.put(`http://localhost:5000/idea/like/${id}`,ideas);
    return result;
  } catch (error) {
    console.log(error)
  }
})

export const updateidea=createAsyncThunk("idea/update",async({id,ideas})=>{
  try {
    console.log(ideas)
    let result=axios.put(`http://localhost:5000/idea/${id}`,ideas);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const updatevalidate=createAsyncThunk("idea/update",async({id})=>{
  try {
    let result=axios.put(`http://localhost:5000/idea/validat/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const updateideastatus=createAsyncThunk("idea/update",async({id})=>{
  try {
    let result=axios.put(`http://localhost:5000/idea/status/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const updateideastatus1=createAsyncThunk("idea/update",async({id})=>{
  try {
    let result=axios.put(`http://localhost:5000/idea/status1/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})
const initialState = {
 ideas:null,
 status:null,
}

export const IdeaSlice = createSlice({
  name: 'idea',
  initialState,
  reducers: {},
  extraReducers:{
    [getidea.pending]:(state)=>{
      state.status="pending";
    },
    [getidea.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      state.ideas=action.payload.data.idea;
    },
    [getidea.rejected]:(state)=>{
      state.status="rejected";
    },
    [addidea.pending]:(state)=>{
      state.status="pending";
    },
    [addidea.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [addidea.rejected]:(state)=>{
      state.status="rejected";
    },
    [deleteidea.pending]:(state)=>{
      state.status="pending";
    },
    [deleteidea.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [deleteidea.rejected]:(state)=>{
      state.status="rejected";
    },
    [updateidea.pending]:(state)=>{
      state.status="pending";
    },
    [updateidea.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updateidea.rejected]:(state)=>{
      state.status="rejected";
    },
    [updateideastatus.pending]:(state)=>{
      state.status="pending";
    },
    [updateideastatus.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updateideastatus.rejected]:(state)=>{
      state.status="rejected";
    },
    [updateideastatus1.pending]:(state)=>{
      state.status="pending";
    },
    [updateideastatus1.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updateideastatus1.rejected]:(state)=>{
      state.status="rejected";
    },
    [updatevote.pending]:(state)=>{
      state.status="pending";
    },
    [updatevote.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updatevote.rejected]:(state)=>{
      state.status="rejected";
    },
    [updatelike.pending]:(state)=>{
      state.status="pending";
    },
    [updatelike.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updatelike.rejected]:(state)=>{
      state.status="rejected";
    },
    [updatevalidate.pending]:(state)=>{
      state.status="pending";
    },
    [updatevalidate.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updatevalidate.rejected]:(state)=>{
      state.status="rejected";
    },
  },
})

// Action creators are generated for each case reducer function

export default IdeaSlice.reducer