
import { BarLoader, Spinner, DoubleBubble,DoubleOrbit,HalfMalf,TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
export default function Comp({component, text, color, isCentered, height, width}) {
    
  
    console.log(width)
    if (component === "BarLoader") return(<BarLoader text={text} bgColor={color} center={isCentered} width={width+"px"} height={height+"px"}/>)
    else if (component === "Spinner") return(<Spinner text={text} bgColor={color} center={isCentered} width={width+"px"} height={height+"px"}/>)
    else if (component === "DoubleOrbit") return(<DoubleOrbit text={text} bgColor={color} center={isCentered} width={width+"px"} height={height+"px"}/>)
    else if (component === "DoubleBubble") return(<DoubleBubble text={text} bgColor={color} center={isCentered} width={width+"px"} height={height+"px"}/>)
    else if (component === "HalfMalf") return(<HalfMalf text={text} bgColor={color} center={isCentered} width={width+"px"} height={height+"px"}/>)
    else if (component === "TripleMaze") return(<TripleMaze text={text} bgColor={color} center={isCentered} width={width+"px"} height={height+"px"}/>)

   
}