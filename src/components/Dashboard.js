import React, { useState } from 'react'

const [count, setCount] = useState(0);

export const Strike = () => {
    return (
        <div>
        <span data-testid='count'>{count}</span>
    </div>
    )
};

export const Ball = () => {
    return (
        <div>
            <span data-testid='count'>{count}</span>
        </div>
    )
};

export const Foul = () => {
    return (
<div>
            <span data-testid='count'>{count}</span>
        </div>
    )
};

export const Hit = () => {
    return (
<div>
            <span data-testid='count'>{count}</span>
        </div>
    )
};
// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - there is **NO** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the `Display` component.