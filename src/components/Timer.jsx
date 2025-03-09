import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, stopTimer, resetTimer, tick } from "../redux/actions";

const Timer = () => {
  const dispatch = useDispatch();
  const { time, running } = useSelector((state) => state.time); 

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, dispatch]);

  return (
    <div>
      <h1>Zaman: {time} saniyə</h1>
      <button onClick={() => dispatch(startTimer())} disabled={running}>
        Başlat
      </button>
      <button onClick={() => dispatch(stopTimer())} disabled={!running}>
        Dayandır
      </button>
      <button onClick={() => dispatch(resetTimer())}>Sıfırla</button>
    </div>
  );
};

export default Timer;
