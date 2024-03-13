// GridContext.js
import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export const useGrid = () => useContext(GridContext);

export const GridProvider = ({ children }) => {
    const [cells, setCells] = useState([false, false, false, false]);

    const toggleCell = index => {
        const newCells = [...cells];
        newCells[index] = !newCells[index];
        setCells(newCells);
    };

    return (
        <GridContext.Provider value={{ cells, toggleCell }}>
            {children}
        </GridContext.Provider>
    );
};
