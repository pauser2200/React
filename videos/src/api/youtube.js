import axios from 'axios';

const KEY = 'AIzaSyAk44vsYbvjH_jVuwQLLbU3WSHX2KxHaZ0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: {KEY}
    }


});