import axios from 'axios';
import config from "../config.json";



export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: config.YT_KEY,
    }
})
