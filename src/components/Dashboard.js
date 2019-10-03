//the dashboard needs to have a set of four buttons, for 'strike, ball, foul, or hit'. When pressed, these buttons should update the display component, including resetting it when necessary. 

import React, { useState } from 'react';

const Dashboard = () =>{
   return(
       <div className = 'dashboard'>
           <button>Ball</button>
           <button>Strike</button>
           <button>Foul</button>
           <button>Hit</button>



       </div>

   )
        
    
}

export default Dashboard