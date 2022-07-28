import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginRequest } from '../../../service/http'  

export const loginApi = createAsyncThunk( 
  'users/login',
  async (params, thunkAPI) => {
    const response = await loginRequest(params)
    
    return response 
  }
)

export const userInfoSlice = createSlice({
  name: 'user',

  initialState: {
    userToken: null,
    me: null,
    projects: []
  },
  reducers: { 
  },
  extraReducers: (build)=>{
    build.addCase(loginApi.fulfilled, (state, action) => {
      const data = action.payload  

      //state.userToken = data.userToken
      const {userToken, me, projects} = data
      state.userToken = userToken
      state.me = me 
      state.projects = projects 
    }) 
  }
})

// Action creators are generated for each case reducer function
export const { actions, reducer } = userInfoSlice.actions

export default userInfoSlice.reducer