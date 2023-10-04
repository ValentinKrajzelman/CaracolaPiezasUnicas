import axios from 'axios';

const url = 'https://caracola-ultimo-backend.vercel.app/eventos/';

export const ApigetEventos = () => axios.get(url);
export const ApicreateEventos = (newEvento) => axios.post(url, newEvento);
export const ApigetEvento = (id) => axios.get(`${url}${id}`);
export const ApiupdateEventos = (id, updatedEvento) => axios.patch(`${url}${id}`, updatedEvento);
export const ApideleteEventos = (id) => axios.delete(`${url}${id}`);
