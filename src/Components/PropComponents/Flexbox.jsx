import { useState, useEffect } from 'react'

import { hexToRgba } from '../../data/helperFunctions'

export default function Flexbox({value, setValue, setCssCode, activeProp}){

  const [flexStyles, setFlexStyles] = useState({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start"
  })

  // const[noOfElem, setNoOfElem] = useState(value.element)

  
  function handleChange(property, value) {
  console.log(property, value)

    setFlexStyles(prev => ({
      ...prev,
      [property]: value
    }))
  }
  
  console.log(flexStyles)
  
  
  
  const [extraElem, setExtraElem] = useState(value.element)
  
  console.log(extraElem)

  const inputHtml = Object.entries(value.properties).map(([key, val],i)=>{

    return(
      <div className="control" key={key}>
      <label className="flexbox-containers">
        {val[0]}
        <select 
          defaultValue={val[1]}
          onChange={(e) => handleChange(key, e.target.value)}
        >
          {val.slice(1).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

      </label>
    </div>
    )
  })

  useEffect(()=>{
    setCssCode(
      `display: ${flexStyles.display};
flex-direction: ${flexStyles.flexDirection};
flex-wrap: ${flexStyles.flexWrap};
justify-content: ${flexStyles.justifyContent};
align-items: ${flexStyles.alignItems};
align-content: ${flexStyles.alignContent};`
    )
  },[flexStyles])


  return(

    <>
      <div className="user-input-section">
          <h2>CSS {value.name}</h2>
          {inputHtml}
          <div className='flexbox-btn-container'>
            <button 
              disabled={extraElem>9?true:false}
              onClick={()=>(setExtraElem(prev=>prev+1))}
              >Add Element</button>
            <button 
              disabled={extraElem<2?true:false}
              onClick={()=>(setExtraElem(prev=>prev-1))}
            >Remove Element</button>
          </div>
        </div>

        <div className="flex-output-section">
          <div 
            className='output-flexbox'
            style={flexStyles}
          >
            <div className='short-flex-elem'>1</div>
            <div className='long-flex-elem'>2</div>
            {[...Array(extraElem)].map((_, index) => (
              <div className='short-flex-elem'>{index+3}</div>
            ))}
          </div>
        </div>

    </>
      
  )

}