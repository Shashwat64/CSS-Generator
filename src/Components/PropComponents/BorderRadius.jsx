import { useState, useEffect } from 'react'

export default function BorderRadius({value, setValue, setCssCode, activeProp}){


  const handleChange = (propKey, e) => {
    // const newValue = Number(e.target.value)

    const raw = e.target.value

    let newValue

    newValue = raw === "" ? "" : Number(raw)
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

  console.log(value)

  const inputHtml = Object.entries(value.properties).map(([key, val]) => 
      {
        return (
          <div className="control" key={key}>
            <div className="top-row">
              <label htmlFor={`num-${key}`}>{key}</label>
    
              {/* Number input */}
              <input
                id={`num-${key}`}
                className="num-input"
                type="number"
                min={value?.min?.[key]}
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
  )

  useEffect(()=>{
    setCssCode(
           `border-radius: ${value.properties.topLeft}px ${value.properties.topRight}px ${value.properties.bottomRight}px ${value.properties.bottomLeft}px;`
    )
  },[value.properties])

  return(

    <>
      <div className="user-input-section">
          <h2>CSS Border Radius</h2>
          {inputHtml}
        </div>

        <div className="output-section">
        <div 
          className="output-div"
          style={{
            borderRadius: `${value.properties.topLeft}px ${value.properties.topRight}px ${value.properties.bottomRight}px ${value.properties.bottomLeft}px`
          }}
        >
        </div>
      </div>
    </>
      
  )
}