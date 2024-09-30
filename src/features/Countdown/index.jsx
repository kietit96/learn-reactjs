import { useEffect, useRef, useState } from "react"

function CountDown() {
    const [timer, setTimer] = useState(60)
    let timerID = useRef()
    let counter = useRef()
    const handleStart = () => {
        timerID.current = setInterval(() => {
            setTimer(prevState => prevState - 1)
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(timerID.current)
    }
    useEffect(() => {
        console.log(timer, counter.current)
        counter.current = timer

    }, [timer])
    return (
        <div className="container">
            <h2>{timer}</h2>
            <button onClick={handleStart}>Start Countdown</button>
            <button onClick={handleStop}>Stop Countdown</button>
        </div>
    );
}

export default CountDown;