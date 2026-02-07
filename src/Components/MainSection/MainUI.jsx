import { useEffect, useState } from "react";
import data from "../../data/data";

export default function MainUI(props) {
  // Use the full data array in state
  const [value, setValue] = useState(data[0]);

  // console.log(value)

  console.log(data[0], value.properties)

  // Handle changes for any property of any object
  const handleChange = (propKey, e) => {
    const newValue = Number(e.target.value);

    setValue((prev) => {
      let newData = {...prev}; // copy array
      newData = {
        ...newData, // copy object
        properties: {
          ...newData.properties, // copy properties
          [propKey]: newValue, // update specific property
        },
      };
      return newData;
    })
  }

  const inputHtml = Object.entries(value.properties).map(([key, val]) => (
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
            onChange={(e) => handleChange(i, key, e)}
          />
        </div>

        {/* Range input */}
        <input
          id={`range-${key}`}
          className="range-input"
          type="range"
          min={value.min[key]}
          max={value.max[key]}
          value={value.properties[key]} // read from state
          onChange={(e) => handleChange(key, e)}
        />
      </div>
  ))

  useEffect(()=>{
    props.setCssCode(<>
           <p>-webkit-box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px rgba(66, 68, 90, 1);</p>
           <p>-moz-box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px rgba(66, 68, 90, 1);</p>
           <p>box-shadow: {value.properties.Horizontal}px {value.properties.Vertical}px {value.properties.Blur}px {value.properties.Spread}px rgba(66, 68, 90, 1);</p>
        </>)
  },[value.properties])

  return (
    <section className="main-ui">
      <div className="user-input-section">
        <h2>CSS Box Shadow</h2>
        {inputHtml}
      </div>

      <div className="output-section">
        <div className="output-div" style={
          {
            WebkitBoxShadow:`${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${value.properties.Spread}px rgba(66, 68, 90, 1)`,
            MozBoxShadow: `${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${value.properties.Spread}px rgba(66, 68, 90, 1)`,
            boxShadow: `${value.properties.Horizontal}px ${value.properties.Vertical}px ${value.properties.Blur}px ${value.properties.Spread}px rgba(66, 68, 90, 1)`
          }
        }>

        </div>
      </div>
    </section>
  );
}
