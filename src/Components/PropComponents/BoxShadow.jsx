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

    if(e.target.name==='color-value'){
      newValue = raw

      console.log(newValue)

      setValue((prev) => {
        let newData = {...prev} 
        newData = {
          ...newData, 
          properties: {
            ...newData.properties, 
            Color:{
              ...newData.properties.Color,
              value:newValue
            }
          },
        }
        return newData
      })
    }

    else if(e.target.name==='color-opacity'){
      // newValue = raw === "" ? "" : Number(raw)

      newValue =  raw === '' ? '' : Math.max(0, Math.min(1, Number(raw)))
      
      

      // newValue = raw 


      console.log(newValue)

      setValue((prev) => {
        let newData = {...prev} 
        newData = {
          ...newData, 
          properties: {
            ...newData.properties, 
            Color:{
              ...newData.properties.Color,
              opacity:newValue
            }
          },
        }
        return newData
      })
    }
    
    
    else
    {
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


  }

  const hexToRgba = (hex, opacity = 1) => {
  let color = hex.replace('#', '');

  if (color.length === 3) {
    color = color.split('').map(char => char + char).join('');
  }

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
  
  const inputHtml = Object.entries(value.properties).map(([key, val]) => 
      {

        if(key==="Color"){
            return(
              <div className="control" key={key}>
                <div className="top-row">
                  <label htmlFor={`${key}`}>{key}</label>
                <input 
                  type="color" 
                  onChange={(e) => handleChange(key, e)}
                  name="color-value"
                />
                </div>
                <div className="top-row">
                  <label htmlFor={`${key}-opacity`}>{key} Opacity</label>
        
                  {/* Number input */}
                  <input
                    id={`num-${key}`}
                    className="num-input"
                    type="number"
                    min='0'
                    max='1'
                    value={value.properties[key].opacity} // read from state
                    onChange={(e) => handleChange(key, e)}
                    name="color-opacity"
                  />

                </div>


              </div>
            )
        }else if(key==="Inset"){
          return(
            <div className="control" key={key}>
              <label>
                Inset
                <input 
                  type="checkbox" 
                  onChange={()=> 
                    setValue(prev => ({
                      ...prev,
                      properties: {
                        ...prev.properties,
                        Inset: !prev.properties.Inset
                      }
                    }))
                  }
                  checked={value.properties.Inset}
                />
              </label>
            </div>
          )
        }
        
        
        else{

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
           <p>-webkit-box-shadow: {value.properties.Inset ? 'inset ' : ''} {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px {hexToRgba(value.properties.Color.value, value.properties.Color.opacity)};</p>
           <p>-moz-box-shadow: {value.properties.Inset ? 'inset ' : ''} {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px {hexToRgba(value.properties.Color.value, value.properties.Color.opacity)};</p>
           <p>box-shadow: {value.properties.Inset ? 'inset ' : ''} {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px {hexToRgba(value.properties.Color.value, value.properties.Color.opacity)};</p>
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
              WebkitBoxShadow: `${value.properties.Inset ? 'inset ' : ''} ${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${value.properties.Spread}px ${hexToRgba(value.properties.Color.value, value.properties.Color.opacity)}`,
              MozBoxShadow: `${value.properties.Inset ? 'inset ' : ''} ${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${value.properties.Spread}px ${hexToRgba(value.properties.Color.value, value.properties.Color.opacity)}`,
              boxShadow: `${value.properties.Inset ? 'inset ' : ''} ${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${value.properties.Spread}px ${hexToRgba(value.properties.Color.value, value.properties.Color.opacity)}`
            }
          }>

          </div>
        </div>
    </>
      
  )

}