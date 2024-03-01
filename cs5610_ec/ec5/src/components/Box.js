import React from 'react';

function Box({ id, isSelected, toggleBox }) {
    return (
        <div
            className={`box ${isSelected ? 'selected' : ''}`}
            id={`box${id}`}
            onClick={toggleBox}
        ></div>
    );
}

export default Box;
