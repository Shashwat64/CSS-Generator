import { useEffect, useState } from "react"

import data from '../../data/data'


export default function BoxShadow({value,setValue, setCssCode}){

  // const [value, setValue] = useState(data[0])

  const handleChange = (propKey, e) => {
    // const newValue = Number(e.target.value)

    const raw = e.target.value

    console.log(e)
    console.log(e.target.name)
    console.log(e.target.value)

    // if (raw !== "") {
    //   const num = Number(raw)
    //   if (num < min || num > max) return
    // }

    let newValue

    if(e.target.name!=='color')
    {
      newValue = raw === "" ? "" : Number(raw)
    }else{
      newValue = raw
    }


    setValue((prev) => {
      let newData = {...prev} 
      newData = {
        ...newData, 
        properties: {
          ...newData.properties, 
          [propKey]: newValue, 
        },
      }
      return newData
    })
  }
  
  const inputHtml = Object.entries(value.properties).map(([key, val]) => 
      {

        if(key==="Color"){
            return(
              <div>
                <div className="top-row">
                  <label htmlFor={`num-${key}`}>{key}</label>
                <input 
                  type="color" 
                  onChange={(e) => handleChange(key, e)}
                  name="color"
                />
                </div>
              </div>
            )
        }else{

            return (
              <div className="control" key={key}>
                <div className="top-row">
                  <label htmlFor={`num-${key}`}>{key}</label>
        
                  {/* Number input */}
                  <input
                    id={`num-${key}`}
                    className="num-input"
                    type="number"
                    min={value.min[key]}
                    max={value.max[key]}
                    value={value.properties[key]} // read from state
                    onChange={(e) => handleChange(key, e)}
                  />
                </div>
        
                {/* Range input */}
                <input
                  id={`range-${key}`}
                  className="range-input"
                  type="range"
                  min={value.min[key] ?? undefined}
                  max={value.max[key] ?? undefined}
                  value={value.properties[key]} // read from state
                  onChange={(e) => handleChange(key, e)}
                />
            </div>
          )
        }
    }
  )

  useEffect(()=>{
    setCssCode(<>
           <p>-webkit-box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px {value.properties.Color};</p>
           <p>-moz-box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px {value.properties.Color};</p>
           <p>box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px {value.properties.Color};</p>
        </>)
  },[value.properties])

  return(

    <>
      <div className="user-input-section">
          <h2>CSS Box Shadow</h2>
          {inputHtml}
        </div>

        <div className="output-section">
          <div className="output-div" style={
            {
              WebkitBoxShadow:`${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${value.properties.Spread}px ${value.properties.Color}`,
              MozBoxShadow: `${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${value.properties.Spread}px ${value.properties.Color}`,
              boxShadow: `${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${value.properties.Spread}px ${value.properties.Color}`
            }
          }>

          </div>
        </div>
    </>
      
  )

}