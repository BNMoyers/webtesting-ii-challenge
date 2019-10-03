import React from 'react';
//need to display the count for 'balls' and 'strikes'

const Display = ({ ballCount,  strikeCount }) => {
    return(
        <>
        <div className='scoreboard'>
            <h1>Title the Thing</h1>
            <div className='data-box'>{ballCount}<p>Balls</p></div>
            <div className='data-box'>{strikeCount}<p>Strikes</p> </div>

        </div>
        </>
    )
}

export default Display