import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex py-4 justify-between items-center'>
      <span className='flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm'>E</span>

      <ul className="flex gap-8">
        <li>
          <NavLink 
            to={'/'}
            className='text-xs text-gray-400 hover:text-white'
            >
              Головна
            </NavLink>
          </li>

          <li>
          <NavLink 
            to={'/posts'}
            className='text-xs text-gray-400 hover:text-white'
            >
              Мої статті
            </NavLink>
          </li>

          <li>
          <NavLink 
            to={'/new'}
            className='text-xs text-gray-400 hover:text-white'
            >
              Додати статтю
            </NavLink>
          </li>
      </ul>

      <div className=' flex  justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
        <button>Увійти</button>
      </div>
    </div>
  )
}
