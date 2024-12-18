import mongoose from 'mongoose';
// import { type } from 'server/reply';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
},
{timestamps:true}
)

export default mongoose.model('User', UserSchema)