import React from 'react';
// import rough from 'roughjs';
// import rough from 'roughjs/bundled/rough.esm.js'; 

const rotatedArrow = '/assets/rotated-right-arrow.svg'
const upArrow ='/assets/up-arrow-with-scribble.png'
const upArrow1 ='/assets/right-up-arrow.png'

export const MainPageDisplay = (): any => {
    const canvas = document.getElementById('canvasElement') as HTMLCanvasElement;
    // const rc = rough.canvas(canvas);
    return (
        <div className="main-container">
            <img src={rotatedArrow} id='rotated-arrow-main' />
            <div className="name-title">
                <h1 className="greeting-title"> Hi,</h1>
                <h1 className="main-body-name"> MY NAME IS HAMMAD</h1>
            </div>
            <img src={upArrow1} id='up-arrow-main'/>
            <div className="main-text-container">
                <h1 className="main-text-projects" >Click the icons to view my projects</h1>
            </div>

        </div>
    )
}

export default MainPageDisplay;