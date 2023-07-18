import axios from 'axios';

const url = 'http://localhost:5000/eventos/';

export const ApigetEventos = () => axios.get(url);
export const ApicreateEventos = (newEvento) => axios.post(url, newEvento);
export const ApigetEvento = (id) => axios.get(`${url}${id}`);
export const ApiupdateEventos = (id, updatedEvento) => axios.patch(`${url}${id}`, updatedEvento);
export const ApideleteEventos = (id) => axios.delete(`${url}${id}`);
