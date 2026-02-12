import { useEffect, useState } from "react"
import data from "../../data/data"

import BoxShadow from "../PropComponents/BoxShadow"
import TextShadow from "../PropComponents/TextShadow"

export default function MainUI({value, setValue, activeProp, setCssCode}) {
  // const [value, setValue] = useState(data.find((prop,i)=>props.activeProp===prop.name))
  
  // const [value, setValue] = useState(data.find((prop,i)=>props.activeProp===prop.name))
  console.log(value, activeProp)

  useEffect(() => {
  console.log("activeProp:", activeProp);

  console.log(
    "all names:",
    data.map(d => d.name)
  );

  const found = data.find(
    prop => prop.name === activeProp
  );

  console.log("found:", found);

  setValue(found);
}, [activeProp]);

  
  console.log(value, activeProp)

  // useEffect(()=>{
  //   setValue(data.find((prop,i)=>props.activeProp===prop.name))
  // }
  // ,[props.activeProp])

  // useEffect(()=>{
  //   props.setCssCode(<>
  //          <p>-webkit-box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px rgba(66, 68, 90, 1);</p>
  //          <p>-moz-box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px rgba(66, 68, 90, 1);</p>
  //          <p>box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px rgba(66, 68, 90, 1);</p>
  //       </>)
  // },[value.properties])

  return (
    <section className="main-ui">
      {activeProp === "Box Shadow" && <BoxShadow value={value} setValue={setValue} setCssCode={setCssCode} />}
      {activeProp === "Text Shadow" && <TextShadow value={value} setValue={setValue} setCssCode={setCssCode} activeProp={activeProp}/>}
    </section>
  )
}
