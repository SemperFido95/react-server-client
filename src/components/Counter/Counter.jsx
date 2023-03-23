import { useState, useEffect } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    let increaseClicks = () => {
        setCounter(counter + 1);
    }

    let decreaseClicks = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div>
            <p>You clicked {counter} times</p>
            <button onClick={increaseClicks}>Increase</button>
            <button onClick={decreaseClicks}>Decrease</button>
        </div>
    );
}

export default Counter;