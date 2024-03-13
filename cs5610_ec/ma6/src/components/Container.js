// Container.js
import React from 'react';
import Box from './Box';
import Counter from './Counter';
import { BoxProvider } from './BoxContext';

function Container() {
    return (
        <BoxProvider>
            <Counter />
            <div className="container">
                {[...Array(4).keys()].map((id) => (
                    <Box key={id} id={id} />
                ))}
            </div>
        </BoxProvider>
    );
}

export default Container;
