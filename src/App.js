import logo from './logo.svg';
import './App.css';
import { BarLoader, Spinner, DoubleBubble, DoubleOrbit, HalfMalf, TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import { useState } from 'react';
import Comp from './Comp';
import { SketchPicker } from 'react-color';

function App() {

  const [text, setText] = useState("Loading...")
  const [isCentered, setIsCentered] = useState(false)
  const [color, setColor] = useState("#557B83")
  const [component, setComponent] = useState("Spinner")
  const [show, setShow] = useState(false)
  

  const selectComponent = (e) => {
    

   setComponent(e)
   setShow(false)

  }

  const setTextVal = (e) => {
    setText(e.target.value)
    setShow(false)
  }

  const apply = () => {
  setShow(true)
  
  }

  const handleChangeComplete = (color) => {
   
  setColor(color.hex)
  setShow(false)
    
  };

  const showColorPicker=()=>{
    
  }

  return (
    <div className="flex flex-row bg-blue-50 w-full min-h-screen h-screen items-start justify-between ">
   

      <div className='flex flex-col w-1/3 items-center justify-center h-full'>
      <h1 className='text-3xl m-5'>react-spinner-animated</h1>
        <label className="mx-3">Spinner/Loader</label>
        <select className='bg-blue-300 w-auto rounded p-1' onChange={(e) => { selectComponent(e.target.value) }}>
          <option value="BarLoader">BarLoader</option>
          <option value="Spinner">Spinner</option>
          <option value="DoubleBubble">DoubleBubble</option>
          <option value="DoubleOrbit">DoubleOrbit</option>
          <option value="HalfMalf">HalfMalf</option>
          <option value="TripleMaze">TripleMaze</option>
        </select>

        <label className=" mt-5">Text</label>
        <input type="text" placeholder="Loading..." className='w-auto rounded p-1 border-2 border-blue-300' onChange={(e) => { setTextVal(e) }} />


        <label className="mx-3 mt-5">Color</label>
       
        <SketchPicker
        color={ color}
        onChangeComplete={handleChangeComplete }
      />
       <button className='bg-blue-400 p-1 m-3 rounded' onClick={apply}>Apply</button>
      </div>

      <div className='flex flex-col w-2/3 items-center justify-center w-full h-full'>
        <div className='flex flex-col w-full'></div>
     {(show) ?  <Comp component={component} text={text} color={color} isCentered={isCentered}/> : null}
     <p className='w-3/5 rounded-lg border-2 border-blue-400 p-3 text-sm'>{`<${component} text={${text}} bgColor={${color}} />`}</p>
      
      </div>
     

     



    </div>
  );
}

export default App;
