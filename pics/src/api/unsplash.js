import  axios from 'axios';


export default  axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization:
            'Client-ID d75053b20400c72f425b564f73ed9307d27889d15132484edbcd97cd8a0c79bb'
    }
});