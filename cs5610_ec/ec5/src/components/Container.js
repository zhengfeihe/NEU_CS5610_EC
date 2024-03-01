import React, { useState } from 'react';
import Box from './Box';

function Container() {
    // This state will keep track of which boxes are selected.
    const [selectedBoxes, setSelectedBoxes] = useState(new Array(9).fill(false));

    function toggleBox(id) {
        // Toggle the selected state for the clicked box
        setSelectedBoxes(prev => prev.map((selected, index) => (index === id ? !selected : selected)));

        // Also toggle the state for adjacent boxes
        getAdjacentBoxIds(id).forEach(adjacentId => {
            setSelectedBoxes(prev => prev.map((selected, index) => (index === adjacentId ? !selected : selected)));
        });
    }

    // Calculate adjacent box ids based on a grid layout
    function getAdjacentBoxIds(id) {
        const directions = { left: -1, right: 1, up: -3, down: 3 };
        const adjacent = [];
        if (id % 3 !== 0) adjacent.push(id + directions.left);
        if (id % 3 !== 2) adjacent.push(id + directions.right);
        if (id > 2) adjacent.push(id + directions.up);
        if (id < 6) adjacent.push(id + directions.down);
        return adjacent.filter(adjId => adjId >= 0 && adjId < 9); // Ensure the adjacent IDs are within bounds
    }

    return (
        <div className="container">
            {[...Array(9).keys()].map((id) => (
                <Box key={id} id={id} isSelected={selectedBoxes[id]} toggleBox={() => toggleBox(id)} />
            ))}
        </div>
    );
}

export default Container;
