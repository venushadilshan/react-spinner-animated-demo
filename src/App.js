import logo from './logo.svg';
import './App.css';
import { BarLoader, Spinner, DoubleBubble,DoubleOrbit,HalfMalf,TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import { useState } from 'react';
import Comp from './Comp';

function App() {
  const [component, setComponent] = useState("")
  const [text, setText] = useState("Loading...")
  const [isCentered, setIsCentered] = useState(true)
  const [color, setColor] = useState("#557B83")
  return (
    <div className="flex flex-col bg-blue-50 w-full min-h-screen h-full items-center flex-wrap">
      <h1 className='text-3xl m-5'>react-spinner-animated</h1>

      <div className='flex flex-row w-full items-center justify-center mt-10'>
        <label className="mx-3">Spinner/Loader</label>
        <select className='bg-blue-300 w-1/5 rounded p-1'>
          <option value="BarLoader">BarLoader</option>
          <option value="Spinner">Spinner</option>
          <option value="DoubleBubble">DoubleBubble</option>
          <option value="DoubleOrbit">DoubleOrbit</option>
          <option value="HalfMalf">HalfMalf</option>
          <option value="TripleMaze">TripleMaze</option>
        </select>

        <label className="mx-3 ml-5">Text</label>
        <input type="text" placeholder="Loading..."  className='w-1/5 rounded p-1 border-2 border-blue-300'/>
      
        
        <label className="mx-3 ml-5">Center?</label>
        <select className='bg-blue-300 w-1/5 rounded p-1'>
          <option value="true">true</option>
          <option value="false">false</option>
         
        </select>
      </div>
  
     
     <Comp component={<BarLoader text={text} bgColor={color} isCentered={isCentered}/>} />
    </div>
  );
}

export default App;
