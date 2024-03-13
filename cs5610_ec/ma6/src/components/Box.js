// Box.js
import React, { useContext } from 'react';
import BoxContext from './BoxContext';

function Box({ id }) {
    const { selectedBoxes, toggleBox } = useContext(BoxContext);
    const isSelected = selectedBoxes[id];

    const boxStyle = isSelected ? 'selected' : '';

    return (
        <div className={`box ${boxStyle}`} onClick={() => toggleBox(id)} />
    );
}

export default Box;
