import axios from 'axios';
import { NGROK_URL } from './ngrok';

export default axios.create({
  baseURL: NGROK_URL,
});
