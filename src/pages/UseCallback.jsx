import React, { useState } from 'react';

const Button = ({ onClick, children }) => {
    console.log(`Button rendered for ${children}`);
    return <button onClick={onClick}>{children}</button>;
};

export default function UseCallback() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        console.log("Incremented");
        setCount(count + 1);
    };

    const handleDecrement = () => {
        console.log("Decremented");
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
        </div>
    );
}