//Components import
import Navbar from "./MainSection/Navbar"
import MainUI from "./MainSection/MainUI"
import CSSCode from "./MainSection/CSSCode"

//Import Hooks
import {useState, useEffect, useRef} from 'react'



export default function MainSection(){
   return(
      <main>
         <Navbar/> 
         <MainUI/> 
         <CSSCode/> 
      </main>
   )
}