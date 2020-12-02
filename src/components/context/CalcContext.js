import React, { createContext, useState } from "react";

export const CalcContext = createContext();

export function CalcProvider(props) {
    const [currentNumber, setCurrentNumbet] = useState(0);

    return (
        <CalcContext.Provider value={[currentNumber, setCurrentNumbet]}>
            {props.children}
        </CalcContext.Provider>
    );
}
