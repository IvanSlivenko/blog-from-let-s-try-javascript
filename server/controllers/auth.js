 import User from '../models/User.js';
 import bcrypt from 'bcryptjs'
 import jwt from 'jsonwebtoken'

 import { JWT_SECRET } from '../secret/secret.js';
//  import dotenv from 'dotenv'

 
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

      const token = jwt.sign({
         id: newUser._id,
      }, JWT_SECRET,
         {expiresIn: '30d'}
      )

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
      const { username, password } = req.body
      const user = await User.findOne({ username })
      if(!user){
         return res.json({message: "Користувач з таким ім'ям відсутній" })
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password)

      if(!isPasswordCorrect){
         return res.json({ message: 'Пароль не вірний' })
      }

      const token = jwt.sign({
         id: user._id,
      }, JWT_SECRET,
         {expiresIn: '30d'}
      )

      res.json({
         token, user, message: "Входження до системи здійснено"
      })

    }catch (error){
      res.json({
         message: 'Помилка підчас аворизації.'})

    }
 }
 //Get Me
 export const getMe = async (req, res) =>{
    try{
      const user = await User.findById(req.userId)

      if(!user){
         return res.json({message: "Користувач з таким ім'ям відсутній" })
      }

      const token = jwt.sign({
         id: user._id,
      }, JWT_SECRET,
         {expiresIn: '30d'}
      )

      res.json({
         user, token
      })


    }catch (error){
      res.json({ message: 'Для вас контент недосяжний.' })
    }
 }

