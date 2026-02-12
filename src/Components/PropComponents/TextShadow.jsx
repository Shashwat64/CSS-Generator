import { hexToRgba } from '../../data/helperFunctions'

export default function TextShadow({value ,setValue, setCssCode, activeProp}){


  console.log(value, activeProp)


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
    }
  )

  console.log( `textShadow: ${value.properties.Inset ? 'inset ' : ''} ${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${hexToRgba(value.properties.Color.value, value.properties.Color.opacity)}`)

  return(

    <>
      <div className="user-input-section">
          <h2>CSS Text Shadow</h2>
          {inputHtml}
        </div>

        <div className="output-section">
          <p className='text-shadow-output'
            style={{
              textShadow: `${value.properties.Inset ? 'inset ' : ''} ${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px  ${hexToRgba(value.properties.Color.value, value.properties.Color.opacity)}`
            }}
          >Text Content</p>
        </div>
    </>
      
  )
}