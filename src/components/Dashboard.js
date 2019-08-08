import React, { useState } from 'react'



const Dashboard = () => {
    const [strikeCount, setStrikeCount] = useState(0);
    const [ballCount, setBallCount] = useState(0);

    const strike = () => {
        if(strikeCount < 3){
            setStrikeCount(strikeCount +1)
        }
        setStrikeCount(0)
    };

    const ball = () => {
        if(ballCount <4){
            setBallCount(ballCount +1)
        }
        setBallCount(0)
    };
    
    const foul = () => {
        if(strikeCount < 2){
            setStrikeCount(strikeCount +1);
        }
    };

    const hit = () => {
        setStrikeCount(0);
        setBallCount(0);
    };

    return(
        <div>
            <button onClick={strike}>Strike!</button>
            <button onClick={ball}>Ball</button>
            <button onClick={foul}>Foul</button>
            <button onClick={hit}>Hit!</button>

            
        </div>
    );
}

export default Dashboard
// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - there is **NO** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the `Display` component.