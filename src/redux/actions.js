export const setColor = (color) => {
  return {
    type: "SET_COLOR",
    payload: color,
  };
};

export const startTimer = () => ({
  type: "START_TIMER",
});

export const stopTimer = () => ({
  type: "STOP_TIMER",
});

export const resetTimer = () => ({
  type: "RESET_TIMER",
});

export const tick = () => ({
  type: "TICK",
});
