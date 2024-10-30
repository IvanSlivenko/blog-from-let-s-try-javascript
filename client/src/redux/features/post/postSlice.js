import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
    posts: [],
    popularPosts: [],
    loading: false,
};

export const createPost = createAsyncThunk(
    'post/createPost',
    async (params) => {

       
        try {
            if(params){
                const { data } = await axios.post('/posts', params);
                return data;
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
);

export const getAllPosts = createAsyncThunk(
    'post/getAllPosts',
    async() => {
        try {
            const { data } = await axios.get('/posts');
            return data
        } catch (error) {
            console.log(error);
                        
        }
    }

)

export const removePost = createAsyncThunk(
    'post/removePost',
    async(id) => {
        try {
           const { data } = await axios.delete(`/posts/${id}`, id) 
           return data
        } catch (error) {
            console.log(error);
            
        }
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Створення публікації
            .addCase(createPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.posts.push(action.payload);
                }
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false;
                console.error('Create post failed:', action.error.message);
            })

            // Отримання всіх публікацій
            .addCase(getAllPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.posts = action.payload.posts;
                    state.popularPosts= action.payload.popularPosts;
                }
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.loading = false;
                
            })

            // Видалення публікації
            .addCase(removePost.pending, (state) => {
                state.loading = true;
            })
            .addCase(removePost.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.posts = state.posts.filter((post) => post._id !== action.payload._id)
                    
                }
            })
            .addCase(removePost.rejected, (state, action) => {
                state.loading = false;
                
            });
    },
});

export default postSlice.reducer;

