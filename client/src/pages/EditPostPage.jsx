import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate,  useParams } from 'react-router-dom';
import axios from '../utils/axios'

export const EditPostPage = () => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [oldImage, setOldImage] = useState('');
  const [newImage, setNewImage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams()

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`)
    setPost(data)
  }, [params.id])

  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
        Додати зображення:
        <input type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <div className="flex object-cover py-2 ">
        { image && (<img src={URL.createObjectURL(image)} alt={image.name} />)}
      </div>
      <label className="text-xs text-white opacity-70">
        Заголовок публікації:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>

      <label className="text-xs text-white opacity-70">
        Текст публікації:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Текст публікації"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none resize-none h-40 placeholder:text-gray-700"
        />
      </label>

      <div className="flex gap-8 items-center justify-center mt-4">
        <button
          type="button"
          onClick={submitHandler}
          className="flex items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4"
        >
          Додати пост
        </button>

        <button
          type="button"
          onClick={clearFormHandler}
          className="flex items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4"
        >
          Скасувати пост
        </button>
      </div>
    </form>
  );
}
