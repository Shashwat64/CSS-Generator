//Components import
import Navbar from "./MainSection/Navbar"
import MainUI from "./MainSection/MainUI"
import CSSCode from "./MainSection/CSSCode"

//Import Hooks
import {useState, useEffect, useRef} from 'react'

import data from '../data/data'


export default function MainSection(){

   const [cssCode, setCssCode] = useState()
   const [activeProp, setActiveProp] = useState('Flexbox')
   const [value, setValue] = useState(data.find((prop,i)=>activeProp===prop.name))

   console.log(activeProp)

   return(
      <main>
         <Navbar activeProp={activeProp} setActiveProp={setActiveProp} value={value} setValue={setValue}/> 
         <MainUI setCssCode={setCssCode} activeProp={activeProp} value={value} setValue={setValue}/> 
         <CSSCode cssCode={cssCode}/> 
      </main>
   )
}