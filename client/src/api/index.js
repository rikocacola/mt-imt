import axios from 'axios';

const url = `http://localhost:5000`;

export const fetchWeeklyEvents = () => axios.get(`${url}/weekly-events`);
export const createWeeklyEvent = (event) => axios.post(`${url}/weekly-events`, event);
export const editWeeklyEvent = (id, event) => axios.patch(`${url}/weekly_events/${id}`, event)
