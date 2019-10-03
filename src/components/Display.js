import React from 'react';
//need to display the count for 'balls' and 'strikes'

const Display = ({ ballCount,  strikeCount }) => {
    return(
        <>
        <div className='scoreboard'>
            <h1>Title the Thing</h1>
            <div className='data-box'>{ballCount}</div>
            <div className='data-box'>{strikeCount} </div>

        </div>
        </>
    )
}

export default Display