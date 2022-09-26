import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'fcca65343cd61e7024c4869bb11c929b',
    language: 'ko-KR',
  },
});

export default instance;
