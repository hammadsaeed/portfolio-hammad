import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import CircleContainer from './components/circle'
import {circleData} from './data';


const myPicture = '/assets/MyImage-no-bg.png'
function App() {
  const [currentSelection, setCurrentSelection] = useState(0);
  const currentData = useRef(circleData[0]);
  const clickCircle = (x: number) => {
    console.log(x)
    setCurrentSelection(x)
  }
  useEffect(() => {
    circleData.map((data: any) => {
      if(data.id === currentSelection) {
        currentData.current = data
        console.log(data.color)
      }
    })
  }, [currentSelection])
  
  return (
    <div className="App" style={{backgroundColor: `${currentSelection ? currentData.current.backgroundColor : '#4f8a8b'}`, transition: 'backgroundColor 5s'}}>
      <img src={myPicture} className='my-picture2' />
      <img src={myPicture} className='my-picture1' />
      <img src={myPicture} className='my-picture' />

      <div className='Center-container' style={{top: `${currentSelection ? '10%': '50%'}`, transition: 'top 1s'}}>
        {[1,2,3,4].map((x: any) => {
          return(
            <div style={{padding: '2%'}} key={`key-${x}`}>
              <CircleContainer 
                clickCircle={clickCircle}
                index={x}
              />
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
