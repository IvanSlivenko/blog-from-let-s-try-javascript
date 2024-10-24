import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify';

export const Navbar = () => {

const  isAuth  = useSelector(checkIsAuth);  
const dispatch = useDispatch();

const activeStyles = {
  color: 'white',
}  

const logoutHandler = () => {
  dispatch(logout());
  window.localStorage.removeItem('token');
  toast('Ваш користувач вийшов з системи');
  
} 

const messageHadler = () => {
  // console.log('Ви виявили бажання створити пост');
  toast('Ви виявили бажання створити пост');
  
}

  return (
    <div className='flex py-4 justify-between items-center'>
      <span className='flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm'>E</span>

      {isAuth && (
        <ul className="flex gap-8">
        <li>
          <NavLink 
            to={'/'}
            className='text-xs text-gray-400 hover:text-white'
            style={({isActive})=> isActive ? activeStyles : undefined}
            >
              Головна
            </NavLink>
          </li>

          <li>
          <NavLink 
            to={'/posts'}
            className='text-xs text-gray-400 hover:text-white'
            style={({isActive})=> isActive ? activeStyles : undefined}
            >
              Мої статті
            </NavLink>
          </li>

          <li>
          <NavLink 
            to={'/new'}
            onClick={messageHadler}
            className='text-xs text-gray-400 hover:text-white'
            style={({isActive})=> isActive ? activeStyles : undefined}
            >
              Додати статтю
            </NavLink>
          </li>
      </ul>
      )}

      

      <div className=' flex  justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
        {isAuth ? 
          (<button
          onClick={logoutHandler}
          >
            Вийти</button>
          ) : <Link to={'/login'}>Увійти</Link>}
        
      </div>
    </div>
  )
}
