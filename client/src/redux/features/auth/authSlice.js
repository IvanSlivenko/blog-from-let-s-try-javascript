import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
}

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

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    redusers: {},
    extraReducers:{
        // Запит відправляється
        [registerUser.pending]:(state)=>{
            state.isLoading=true
            
        },

        // Запит виконано до кінця
        [registerUser.fulfilled]:(state, action)=>{
            state.isLoading = false
            state.status = null
        },

        //Виникла помилка
        [registerUser.rejected]:(state, action)=>{
            state.status = 
        },
    }
}) 

export default authSlice.reducer