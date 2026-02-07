//Components import
import Navbar from "./MainSection/Navbar"
import MainUI from "./MainSection/MainUI"
import CSSCode from "./MainSection/CSSCode"

//Import Hooks
import {useState, useEffect, useRef} from 'react'



export default function MainSection(){

   const [cssCode, setCssCode] = useState(
      <>
         <p>-webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);</p>
         <p>-moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);</p>
         <p>box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);</p>
      </>
   )

   return(
      <main>
         <Navbar/> 
         <MainUI setCssCode={setCssCode} /> 
         <CSSCode cssCode={cssCode}/> 
      </main>
   )
}