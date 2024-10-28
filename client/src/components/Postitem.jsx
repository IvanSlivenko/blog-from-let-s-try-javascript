import React from 'react'
import {AiFillEye, AiOutlineMessage} from 'react-icons/ai'

const PostItem = ({ post }) => {
  if(!post){
    return <div className='
        text-xl 
        text-center 
        text-white 
        py-10
      '>
        Пости відсутні
      </div>
  }
  return (
    <div className='
       flex
       flex-col
       basic-1/4
       flex-grow
      '
    >
      <div>IMAGE</div>

      <div className="flex 
      justify-between 
      items-center
      pt-2
      ">
        <div className='
        text-xs
        text-white 
        opacity-50
        '>
          {post.username}
        </div>
        
        <div  className='
        text-xs
        text-white 
        opacity-50
        '>  
          {post.createdAt}
        </div>
      </div>
      
      <div className="text-white text-xl">{post.title}</div>
      
      <p className='text-white opacity-60 text-xs pt-4'>
        {post.text}
      </p>
      
      <div className="
        flex
        gap-3
        items-center
        mt-2   
      ">
          <button className='
            flex 
            items-center
            justify-center
            gap-2
            text-xs
            text-white
            opacity-50
          '>
            <AiFillEye/><span>{post.views}</span>
          </button>

          <button className='
            flex 
            items-center
            justify-center
            gap-2
            text-xs
            text-white
            opacity-50
          '>
            <AiOutlineMessage/> <span>{post.comments?.length}</span>
          </button>
      </div>
    </div>
  )
}

export default PostItem