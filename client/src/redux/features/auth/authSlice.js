import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,

}

//Руєструємо користувача
export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async ({username, password})=>{
        try{
            const { data } = await axios.post('/auth/register',{
                username, 
                password,
            })
            if(data.token){
                window.localStorage.setItem('token', data.token)
            }   
            return data
        } catch(error){
            console.log(error);
            
        }
},
)
//Підтверджуємо користувача
export const loginUser = createAsyncThunk(
    'auth/loginUser', 
    async ({username, password})=>{
        try{
            const { data } = await axios.post('/auth/login',{
                username, 
                password,
            })
            if(data.token){
                window.localStorage.setItem('token', data.token)
            }   
            return data
        } catch(error){
            console.log(error);
            
        }
},
)

//Перевіряємо користувача
export const getMe = createAsyncThunk(
    'auth/me', 
    async ()=>{
        try{
            const { data } = await axios.get('/auth/me')
              
            return data
        } catch(error){
            console.log(error);
            
        }
},
)



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user= null
            state.token= null
            state.isLoading= false
            state.status= null
        }
    },

    extraReducers: (builder)=>{
        builder

            // registerUser
            .addCase(registerUser.pending, (state)=>{
            state.isLoading=true
            state.status = null

            
            })                                       // Запит відправляється
        
            .addCase(registerUser.fulfilled, (state, action)=>{
                state.isLoading = false
                state.status = action.payload.message
                state.user=action.payload.user
                state.token = action.payload.token 

            })                                          // Запит виконано до кінця
            
            .addCase(registerUser.rejected, (state, action)=>{
                state.status = action.payload.message
                state.isLoading = false
            })                                         //Виникла помилка
            

          //-------------------------------------------------------------
           // loginUser
            .addCase(loginUser.pending, (state)=>{
            state.isLoading=true
            state.status = null

            
            })                                       // Запит відправляється
        
            .addCase(loginUser.fulfilled, (state, action)=>{
                state.isLoading = false
                state.status = action.payload.message
                state.user=action.payload.user
                state.token = action.payload.token 

            })                                          // Запит виконано до кінця
            
            .addCase(loginUser.rejected, (state, action)=>{
                state.status = action.payload.message
                state.isLoading = false
            })                                         //Виникла помилка   
            
            // Get Me ( audit authorization )
            .addCase(getMe.pending, (state)=>{
            state.isLoading=true
            state.status = null

            
            })                                       // Запит відправляється
        
            .addCase(getMe.fulfilled, (state, action)=>{
                state.isLoading = false
                state.status = null
                state.user=action.payload?.user
                state.token = action.payload?.token 

            })                                          // Запит виконано до кінця
            
            .addCase(getMe.rejected, (state, action)=>{
                state.status = action.payload.message
                state.isLoading = false
            })                                         //Виникла помилка  
        
    }
}) 

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer