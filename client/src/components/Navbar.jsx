import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

const activeStyles = {
  color: 'white',
}  
const isAuth = false;

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
            className='text-xs text-gray-400 hover:text-white'
            style={({isActive})=> isActive ? activeStyles : undefined}
            >
              Додати статтю
            </NavLink>
          </li>
      </ul>
      )}

      

      <div className=' flex  justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
        {isAuth ? (<button>Вийти</button>) : <Link to={'/login'}>Увійти</Link>}
        
      </div>
    </div>
  )
}
