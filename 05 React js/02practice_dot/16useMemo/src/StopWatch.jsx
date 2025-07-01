import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function start() {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        //  console.log(time);
      }, 1000);
      setIsRunning(true);
    }
  }

  function stop() {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }

  function reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <div className="m-10">
      <h1  className="text-center text-3xl m-6">StopWatch is: {time}</h1>
      <div className="flex gap-10 ">
        <button onClick={start}
        className="p-5 m-2 bg-blue-500 text-white cursor-pointer"
        >Start</button>
        <br></br>
        <br></br>
        <button onClick={stop}
        className='p-5 m-2 bg-pink-600 text-white cursor-pointer'
        >Stop</button>
        <br></br>
        <br></br>
        <button onClick={reset}
        className='p-5 m-2 bg-cyan-500 text-white cursor-pointer'
        >Reset</button>
      </div>
    </div>
  );
}
export default StopWatch;
