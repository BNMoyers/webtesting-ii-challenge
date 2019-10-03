import React from 'react';
//need to display the count for 'balls' and 'strikes'

const Display = ({ ballCount,  strikeCount }) => {
    return(
        <>
        <div className='scoreboard'>
            <h1>Play the Sport</h1>
            <div className='balls'>{ballCount}<p className='ball-title'>Balls</p></div>
            <div className='strikes'>{strikeCount}<p className='ball-title'>Strikes</p> </div>

        </div>
        </>
    )
}

export default Display