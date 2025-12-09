import React, {useEffect, useState} from "react"

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        document.title = time
        return () => {
            clearInterval(timer)
        }
    }, [time])
return (
    <div>
    <h2>Clock App</h2>
    <p>{time}</p>
    </div>
)
}