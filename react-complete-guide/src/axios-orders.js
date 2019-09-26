import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://le-react-burger.firebaseio.com/'
});

export default instance;
