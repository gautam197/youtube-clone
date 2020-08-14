import axios from 'axios'


const KEY  = 'AIzaSyBVvMCUkujIPMJlypMkpyUuLtkCLNyFf2c'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 15,
        type:"video",
    }
})