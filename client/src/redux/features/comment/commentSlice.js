import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
  comments: [],
  loading: false,
     
};

export const createComment = createAsyncThunk(
    'comment/createComment',
    async ( {postId, comment }) => {
        try {
            const { data } = await axios.post(`/comments/${postId}`, {
                postId,
                comment,
            })

            console.log('postId',postId);
            
            
            return data
        } catch (error) {
            console.log(error)
        }
    },
)


export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Створення публікації
            .addCase(createComment.pending, (state) => {
                state.loading = true;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.comments.push(action.payload);
                }
            })
            .addCase(createComment.rejected, (state, action) => {
                state.loading = false;
                console.error('Create post failed:', action.error.message);
            })

            
    },
});

export default commentSlice.reducer;