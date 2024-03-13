// BoxContext.js
import React, { createContext, useState } from 'react';

const BoxContext = createContext();

export const BoxProvider = ({ children }) => {
    const [selectedBoxes, setSelectedBoxes] = useState(new Array(4).fill(false));

    const toggleBox = (id) => {
        setSelectedBoxes(prevBoxes =>
            prevBoxes.map((selected, index) => index === id ? !selected : selected)
        );
    };

    return (
        <BoxContext.Provider value={{ selectedBoxes, toggleBox }}>
            {children}
        </BoxContext.Provider>
    );
};

export default BoxContext;
