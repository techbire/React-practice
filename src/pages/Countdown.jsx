import React, { useState, useEffect } from 'react';

function Countdown() {
    const [seconds, setSeconds] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        if (seconds === 0) {
            alert("allah hu akbar 🐦‍🔥🐦‍🔥🔥🔥");
            setIsRunning(false);
            return;
        }
        
        if (!isRunning) return;
        if (seconds === 1) {
                    setTimeout(() => {
                        const img = document.createElement('img');
                        img.src = 'https://lh3.googleusercontent.com/GCXdIs_Qx8Qq3E2xUFCUcrCgcsJw4lZC8y3zYHDl1exP8sdZBFhfWu03WlvewwjpLo89=s85';
                        img.style.position = 'fixed';
                        img.style.top = '50%';
                        img.style.left = '50%';
                        img.style.transform = 'translate(-50%, -50%) scale(0)';
                        img.style.width = '80%';
                        img.style.maxWidth = '600px';
                        img.style.zIndex = '1000';
                        img.style.animation = 'popIn 0.5s ease-out forwards';
                        document.body.appendChild(img);
                        
                        const style = document.createElement('style');
                        style.textContent = `
                            @keyframes popIn {
                                to {
                                    transform: translate(-50%, -50%) scale(1);
                                }
                            }
                        `;
                        document.head.appendChild(style);
                    }, 1000);
                }
        const interval = setInterval(() => {
            setSeconds(s => s - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{seconds}</h1>
            
            <button onClick={() => setIsRunning(true)} disabled={isRunning}>
                Start
            </button>
            <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
                Pause
            </button>
            <button onClick={() => { setIsRunning(false); setSeconds(10); }}>
                Reset
            </button>
        </div>
    );
}

export default Countdown;
