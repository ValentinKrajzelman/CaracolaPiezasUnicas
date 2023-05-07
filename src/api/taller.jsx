import axios from 'axios';

const url = 'http://localhost:5000/talleres/';

export const ApigetTalleres = () => axios.get(url);
export const ApicreateTalleres = (newTaller) => axios.post(url, newTaller);
export const ApigetTaller = (id) => axios.get(`${url}/${id}`);
export const ApiupdateTalleres = (id, updatedTaller) => axios.patch(`${url}/${id}`, updatedTaller);
export const ApideleteTalleres = (id) => axios.delete(`${url}/${id}`);
