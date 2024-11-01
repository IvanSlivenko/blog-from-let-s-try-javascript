import { Router }  from 'express';

import { checkAuth } from '../utils/checkAuth.js';
import { createCommentControl } from '../controllers/comments.js'


const router = new Router();

//Create Comment
//http://localhost:3002/api/comments/:id
router.post('/:id', checkAuth, createCommentControl)



export default router