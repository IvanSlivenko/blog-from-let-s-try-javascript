import axios from 'axios'

const instans = axios.create({
    baseURL:'http://localhost:3002/api'
})

instans.interceptors.request.use(config =>{
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instans