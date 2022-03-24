import logo from './logo.svg';
import './App.css';
import { BarLoader, Spinner, DoubleBubble, DoubleOrbit, HalfMalf, TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import { useState } from 'react';
import Comp from './Comp';
import { HuePicker } from 'react-color';

function App() {

  const [text, setText] = useState("Loading...")
  const [isCentered, setIsCentered] = useState(false)
  const [color, setColor] = useState("#557B83")
  const [component, setComponent] = useState("BarLoader")
  const [show, setShow] = useState(false)
  const [height, setHeight] = useState("150")
  const [width, setWidth] = useState("150")



  const selectComponent = (e) => {


    setComponent(e)
    setShow(false)

  }

  const setTextVal = (e) => {
    setText(e)
    setShow(false)
  }

  const apply = () => {
    setShow(true)

  }

  const handleChangeComplete = (color) => {

    setColor(color.hex)
    setShow(false)

  };

  const setComponentHeight = (e) => {
    setHeight(e)
    setShow(false)
  }

  const setComponentWidth = (e) => {
    setWidth(e)
    setShow(false)
   

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
        <div className='flex flex-row w-4/5 flex-wrap items-center justify-center mt-5'>

          <input type="text" placeholder="Custom Text" className='w-full rounded border-2 border-blue-300' onChange={(e) => { setTextVal(e.target.value) }} />

          <div className='flex flex-row w-full mt-5'>
            <input type="number" placeholder="Width (px)" className='mr-1 w-full rounded border-2 border-blue-300' onChange={(e) => { setComponentWidth(e.target.value) }} />


            <input type="number" placeholder="Height (px)" className='ml-1 w-full rounded  border-2 border-blue-300' onChange={(e) => { setComponentHeight(e.target.value) }} />
          </div>

        </div>




        <label className="mx-3 mt-5">Color</label>

        <HuePicker
          color={color}
          onChangeComplete={handleChangeComplete}
        />
        <button className='bg-blue-400 p-1 m-3 rounded w-1/3' onClick={apply}>Apply</button>
      </div>

      <div className='flex flex-col w-2/3 items-center justify-center w-full h-full'>
        <div className='flex flex-col w-full'></div>
        {(show) ? <Comp component={component} text={text} color={color} isCentered={isCentered} height={height} width={width} /> : null}
        <p className='w-3/5 rounded-lg border-2 border-blue-400 p-3 text-sm'>{`<${component} text={"${text}"} bgColor={"${color}"} 
        width={"${width}px"} height={"${height}px"} />`}</p>

      </div>






    </div>
  );
}

export default App;
