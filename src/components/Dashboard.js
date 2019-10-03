//the dashboard needs to have a set of four buttons, for 'strike, ball, foul, or hit'. When pressed, these buttons should update the display component, including resetting it when necessary. 

import React, { useState } from 'react';

const Dashboard = (props) =>{
   return(
       <div className = 'dashboard'>
           <button data-testid='ball' onClick={props.ball}>Ball</button>
           <button onClick={props.strike}>Strike</button>
           <button onClick={props.foul}>Foul</button>
           <button onClick={props.hit}>Hit</button>



       </div>

   )
        
    
}

export default Dashboard