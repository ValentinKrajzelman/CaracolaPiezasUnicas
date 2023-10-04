import axios from 'axios';

const url = 'https://caracola-ultimo-backend.vercel.app/noticias/';

export const ApigetNoticias = () => axios.get(url);
export const ApicreateNoticias = (newNoticia) => axios.post(url, newNoticia);
export const ApigetNoticia = (id) => axios.get(`${url}${id}`);
export const ApiupdateNoticias = (id, updatedNoticia) => axios.patch(`${url}${id}`, updatedNoticia);
export const ApideleteNoticias = (id) => axios.delete(`${url}${id}`);
