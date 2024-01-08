
import React from 'react';
import './App.css';
import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRef} from 'react';
// import logo from './logo.svg';

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }


export default function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if(counter >= 3){
    return
    }
    setCounter(counter+1)
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
    // ---setcounter = 0 with useRef  ---
  // const [isActive, setActive] = useState(false);
  // const ref = useRef(null);
  // const handleToggle = () => {
  //   console.log('Element contains class');
  //   setActive(!isActive);
  //   if (ref.current.classList.contains('light')) {
  //     setCounter(0)
  //   }
  // };


  const [isActive, setActive] = useState(false);
  const handleToggle = event => {

    setActive(!isActive);
    if (isActive) {
      alert('Light OFF');
    } else {
      alert('Light ON');
    }
    if (!event.currentTarget.classList.contains('light')) {
      setCounter(0)
    }
  };



  // const ref = useRef(null);
  // useEffect(() => {
  //   if (!ref.current.classList.contains('')) {
  //     setCounter(0)
  //   }
  // }, []);

  // useEffect(()=>{
  //   if(isActive) {
  //     alert('on')
  //   }
  //   else {
  //     alert('off')
  //   }
  //   }, [isActive]
  //   );
  


  // const x = 23;
  // let text = "goodddd";
  // if (x > 9){
  //   text = "hello"
  // }
  // const myElm = <h1>{text}</h1>
  const y = 5;

const myE = <h1>{(y) < 10 ? "Hello" : "Goodbye"}</h1>;
const my2 = <h1>{(y) > 4 ? "go" : "come"}</h1>

const paragraph = React.createElement('h3', {}, 'This is a paragraph without using JSX!');

const qw = 6;
let text = "if < then 6"
if (qw < 20){
  text = "text is greater then 20"
}
const re =<h5>{text}</h5>

const r = 9;
const nw =<h4>{(r) < 8 ? "less then 8" : "greater then 8" }</h4>
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

 return (

  <div className = {`test level${counter} ${isActive ? "light" :  ""}`}>
    <div className="ticket-options h-screen" style={{ backgroundImage: `url('../hnt.jpg')` }}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <img src="../logo192.png" alt="logo" /> */}
      {/* <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton /> */}
     <div class="light_setng bg-stone-300 rounded-xl relative w-52 h-52 left-11 top-11 dflex justify-center border-solid border-8 border-lime-100">
        <div
         class="light_btn switch shadow-inner block rounded-2xl box-content relative w-24 h-8 p-0.5 mr-2.5 mb-2.5 cursor-pointer" onClick={handleToggle}>
        <span class="switch-label bg-customLime" data-on="On" data-off="Off"></span> 
          <span class="switch-handle absolute w-7 h-7 left-1 top-1"></span>
        </div>
        <div className="option-adult flex pointer-events-none">
              <button className="arrow-down arw-cmn cursor-pointer w-25 h-25" onClick={decrementCounter}></button>
              {/* <input type="text" value={counter}/> */}
              <button className="arrow-up arw-cmn cursor-pointer w-25 h-25" onClick={incrementCounter}></button>
          </div>
      </div>

    
  <div class="bulb-container absolute top-0 dflex w-52 h-64 left-[31%] z-10">
    <div class="wire"></div>
    <div class="connector">
      <div class="grove"></div>
      <div class="grove"></div>
      <div class="grove"></div>
    </div>
  <div class="bulb">
    <div class="metal-wire"></div>
    <div class="metal-wire"></div>
    <div class="metal-wire"></div>
  </div>
</div>


    </div>
    <div className='extra'>
    <Garage />
    {nw}
    {re}
    {paragraph}
    <p class="before:content-['Not_Hovering'] hover:before:content-['Hovering']">{my2}</p>
    <p>{myE}</p>
    </div>
    </div>
  );
}
