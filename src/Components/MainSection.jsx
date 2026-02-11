//Components import
import Navbar from "./MainSection/Navbar"
import MainUI from "./MainSection/MainUI"
import CSSCode from "./MainSection/CSSCode"

//Import Hooks
import {useState, useEffect, useRef} from 'react'



export default function MainSection(){

   const [cssCode, setCssCode] = useState(`
         -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
         -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
         box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      ` 
   )

   return(
      <main>
         <Navbar/> 
         <MainUI setCssCode={setCssCode} /> 
         <CSSCode cssCode={cssCode}/> 
      </main>
   )
}