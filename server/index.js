import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

//Constans
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD =process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_NAME_2= process.env.DB_NAME_2

const app = express();
dotenv.config();

async function start() {
    try{
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jgevz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
            // `mongodb+srv://umanproger:${DB_PASSWORD}@cluster0.jgevz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )
        app.listen(PORT, ()=>{
            console.log(`Server run in http://localhost:${PORT}`);
            
        })
    } catch (error){
      console.log(error);
        
    }
}
start();


