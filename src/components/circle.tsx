import React from 'react';

export const CircleContainer = (props: {clickCircle: any, index: number, circleImg: string, currentSelection: number}) => {
    const  {clickCircle, index, circleImg, currentSelection} = props;
    return (
        <div className={`Circle-div ${index === currentSelection ? 'circle-div-selected' : ''}`} onClick={() => clickCircle(index)}>
            {circleImg.length ? (
                <img src={circleImg} alt="project-image" className='project-image'></img>
            ):(<></>) }
        </div>
    )
}

export default CircleContainer;