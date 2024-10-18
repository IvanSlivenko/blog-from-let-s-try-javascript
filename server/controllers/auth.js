 import User from '../models/User.js';
 import bcrypt from 'bcryptjs'

 
 //Register user
 export const register = async (req, res) =>{
    try{
      const { username, password } = req.body

      const isUsed = await User.findOne({username})

      if(isUsed){
         return res.json({
            message: 'Такий username вже існує'
         })
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt)

      const newUser = new User({
         username, 
         password: hash,
      })

      await newUser.save()

         res.json({
            newUser,
            message:' Було зареєстровано нового юзера'
         })

    }catch (error){
      res.json({
         message: 'Помилка підчас створення користувача.'})
    }
 }
 //Login user
 export const login = async (req, res) =>{
    try{

    }catch (error){

    }
 }
 //Get Me
 export const getMe = async (req, res) =>{
    try{

    }catch (error){

    }
 }

