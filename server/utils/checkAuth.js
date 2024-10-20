import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../secret/secret.js';

export const checkAuth = (req, res,  next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    if(token){
        try{
            const decoded = jwt.verify(token, JWT_SECRET);
            req.userId = decoded.id;

            next();
        }catch (error) {
            return res.json({ 
                message: 'Для вас інформація недосяжна.'
             })
        }
    }else{
        return res.json({ 
            message: 'Для вас інформація недосяжна.'
         })
    }

}