//Components import
import Navbar from "./MainSection/Navbar"
import MainUI from "./MainSection/MainUI"
import CSSCode from "./MainSection/CSSCode"

//Import Hooks
import {useState, useEffect, useRef} from 'react'



export default function MainSection(){

   const [cssCode, setCssCode] = useState()

   const [activeProp, setActiveProp] = useState('Box Shadow')

   return(
      <main>
         <Navbar activeProp={activeProp} setActiveProp={setActiveProp}/> 
         <MainUI setCssCode={setCssCode} /> 
         <CSSCode cssCode={cssCode}/> 
      </main>
   )
}