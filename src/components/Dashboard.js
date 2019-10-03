//the dashboard needs to have a set of four buttons, for 'strike, ball, foul, or hit'. When pressed, these buttons should update the display component, including resetting it when necessary. 

import React, { useState } from 'react';

const Dashboard = () =>{
    let [strikeCount, setStrikeCount] = useState(0);
    let [ballCount, setBallCount] = useState(0);

    const ball = () => ballCount < 4 ? setBallCount +1 : (setBallCount = 0, setStrikeCount = 0);
    
    const strike = () => strikeCount < 3 ? setStrikeCount +1 : (setStrikeCount = 0, setBallCount = 0);
    
    const hit = () => (setBallCount = 0, setStrikeCount = 0)
    
    const foul = () => strikeCount = 2 ? strikeCount : setStrikeCount +1;
        
    
}

export default Dashboard