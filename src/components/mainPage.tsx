import React from 'react';
// import rough from 'roughjs';
// import rough from 'roughjs/bundled/rough.esm.js'; 

const rotatedArrow = '/assets/rotated-right-arrow.svg'
export const MainPageDisplay = (): any => {
    const canvas = document.getElementById('canvasElement') as HTMLCanvasElement;
    // const rc = rough.canvas(canvas);
    return (
        <>
            <img src={rotatedArrow} id='rotated-arrow-main' />
            <div className="name-title">
                <h1 className="greeting-title"> Hi,</h1>
                <h1 className="main-body-name"> MY NAME IS HAMMAD</h1>
            </div>

        </>
    )
}

export default MainPageDisplay;