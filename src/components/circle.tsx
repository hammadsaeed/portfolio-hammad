import React from 'react';

export const CircleContainer = (props: {clickCircle: any, index: number}) => {
    const  {clickCircle, index} = props;
    return (
        <div className='Circle-div' onClick={() => clickCircle(index)}>
        </div>
    )
}

export default CircleContainer;