import * as api from '../api';

export const getWeeklyEvents = () => async (dispatch) => {
  try{
    const {data} = await api.fetchWeeklyEvents();

    dispatch({
      type: 'GET_WEEKLY_EVENTS',
      payload: data
    })
  } catch (err) {
    console.error('Error', err);
  }
}

export const createWeeklyEvent = (event) => async (dispatch) => {
  try{
    const {data} = await api.createWeeklyEvent(event);

    dispatch({
      type: 'CREATE_WEEKLY_EVENT',
      payload: data,
    })
  } catch(err){
    console.log('Error', err)
  }
}
