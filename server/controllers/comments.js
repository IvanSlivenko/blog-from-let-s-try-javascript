import { trace } from "console";
import Comment  from "../models/Comment.js";
import Post from "../models/Post.js";
import User from "../models/User.js";
import path, { dirname } from 'path'
import { fileURLToPath } from "url";

//Create Comment
export const createCommentControl = async (req, res) => {
    try {
    
        
        const { postId, comment } = req.body

        if(!comment){
            return res.json({ message: 'Коментар не може бути пустим '})
        }

        const newComment = new Comment({ comment })
        await newComment.save()

        try {
            await Post.findByIdAndUpdate(postId, {
                $push: { comments: newComment._id },
            })

        } catch (error) {
            console.log(error);   
        }

        res.json(newComment)
    } catch (error) {
        res.json({ message: 'Коментар не створено ....' })
        
    }
}