import { useEffect, useState } from "react"
import data from "../../data/data"

import BoxShadow from "../PropComponents/BoxShadow"

export default function MainUI(props) {
  // Use the full data array in state
  const [value, setValue] = useState(data[0])

  // console.log(value)

  console.log(data[0], value.properties)

  // useEffect(()=>{
  //   props.setCssCode(<>
  //          <p>-webkit-box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px rgba(66, 68, 90, 1);</p>
  //          <p>-moz-box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px rgba(66, 68, 90, 1);</p>
  //          <p>box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px rgba(66, 68, 90, 1);</p>
  //       </>)
  // },[value.properties])

  return (
    <section className="main-ui">
      <BoxShadow value={value} setValue={setValue} setCssCode={props.setCssCode} />
    </section>
  )
}
