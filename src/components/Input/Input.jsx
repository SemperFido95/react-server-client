import { useState } from "react";

function Input() {
    // binding variable to an input
    const [firstName, setFirstName] = useState('Bailey');

    return (
        <div>
            <h2>Input:</h2>
            <p>You have typed: {firstName}</p>
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
            />
        </div>
       
    )
}

export default Input;