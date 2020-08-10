import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import CircleContainer from './components/circle'
import {circleData} from './data';
import {MainPageDisplay} from './components/mainPage';


const myPicture = '/assets/MyImage-no-bg.png'
function App() {
  const [currentSelection, setCurrentSelection] = useState(0);
  const currentData = useRef(circleData[0]);
  const clickCircle = (x: number) => {
    console.log(x)
    setCurrentSelection(x)
  }

  return (
    <div className="App" style={{backgroundColor: `${circleData[currentSelection] ? circleData[currentSelection].backgroundColor: circleData[0].backgroundColor}`, transition: 'backgroundColor 5s'}}>
      <img src={myPicture} className='my-picture border-picture' />
      <img src={myPicture} className='my-picture blur2' />
      <img src={myPicture} className='my-picture blur1' />
      <img src={myPicture} className='my-picture' />
      {!currentSelection ?
          (
            <MainPageDisplay />
          ) : ( <div></div>)
      }
      

      <div className='Center-container' style={{top: `${currentSelection ? '10%': '60%'}`, transition: 'top 1s'}}>
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
        {currentSelection ?
          (
            <div className="close-emoji" onClick={() => clickCircle(0)}>❌</div>
          ) : ( <div></div>)
        }
      </div>

    </div>
  );
}

export default App;
