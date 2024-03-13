// Counter.js
import React, { useContext } from 'react';
import BoxContext from './BoxContext';

const Counter = () => {
    const { selectedBoxes } = useContext(BoxContext);
    const selectedCount = selectedBoxes.filter(isSelected => isSelected).length;

    return <p className="counter">Count: {selectedCount}</p>;
};

export default Counter;
