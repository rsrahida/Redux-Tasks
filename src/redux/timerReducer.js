const initialState = {
  time: 0,
  running: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_TIMER":
      return { ...state, running: true };
    case "STOP_TIMER":
      return { ...state, running: false };
    case "RESET_TIMER":
      return { time: 0, running: false };
    case "TICK":
      return state.running ? { ...state, time: state.time + 1 } : state;
    default:
      return state;
  }
};

export default timerReducer;
