const reducer = (events = [], action) => {
  switch (action.type){
    case 'GET_WEEKLY_EVENTS':
      return action.payload;
    case 'CREATE_WEEKLY_EVENT':
      return [...events, action.payload];
    default: 
      return events;
  }
}

export default reducer;
