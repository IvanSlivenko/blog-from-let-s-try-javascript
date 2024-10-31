import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import commentRoute from './routes/comments.js'

import { 
    PORT,
    USER,
    PASSWORD,
    USER_2,
    PASSWORD_2,
    DB_NAME,
    DB_NAME_2 

 } from './secret/secret.js'

const URL = `mongodb+srv://${USER_2}:${PASSWORD_2}@cluster0.iqfcv.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

const URL_2= `mongodb+srv://${USER_2}:${PASSWORD_2}@cluster0.iqfcv.mongodb.net/${DB_NAME_2}?retryWrites=true&w=majority&appName=Cluster0`


const app = express();

// Middleware
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'))

//Routes
//http://localhost:3002
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)



async function start() {
    try{
        await mongoose
        .connect(URL_2, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>console.log('Connected to Mongo DB'))
        
        app.listen(PORT, ()=>{
            console.log(`Server run in http://localhost:${PORT}`); 
        })
    } catch (error){
      console.log(error); 
    }
    }
start();

// mongoose
//     .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=>console.log('Connected to Mongo DB'))
//     .catch((err)=>console.log(`DB connection error: ${err}`))

// app.listen(PORT, (err) => {
//     err ? console.log(err) : console.log(`server startered in http://localhost:${PORT}`);    
// });



