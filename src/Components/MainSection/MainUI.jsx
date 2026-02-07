import { useState } from "react";
import data from "../../data/data";

export default function MainUI() {
  // Use the full data array in state
  const [value, setValue] = useState(data);

  // Handle changes for any property of any object
  const handleChange = (objIndex, propKey, e) => {
    const newValue = Number(e.target.value);

    setValue((prev) => {
      const newData = [...prev]; // copy array
      newData[objIndex] = {
        ...newData[objIndex], // copy object
        properties: {
          ...newData[objIndex].properties, // copy properties
          [propKey]: newValue, // update specific property
        },
      };
      return newData;
    })
  }
  
  const inputHtml = value.map((item, i) => {
    return Object.entries(item.properties).map(([key, val]) => (
      <div className="control" key={`${i}-${key}`}>
        <div className="top-row">
          <label htmlFor={`num-${i}-${key}`}>{key}</label>

          {/* Number input */}
          <input
            id={`num-${i}-${key}`}
            className="num-input"
            type="number"
            min={item.min[key]}
            max={item.max[key]}
            value={value[i].properties[key]} // read from state
            onChange={(e) => handleChange(i, key, e)}
          />
        </div>

        {/* Range input */}
        <input
          id={`range-${i}-${key}`}
          className="range-input"
          type="range"
          min={item.min[key]}
          max={item.max[key]}
          value={value[i].properties[key]} // read from state
          onChange={(e) => handleChange(i, key, e)}
        />
      </div>
    ));
  });

  return (
    <section className="main-ui">
      <div className="user-input-section">
        <h2>CSS Box Shadow</h2>
        {inputHtml}
      </div>

      <div className="output-section">
        <h3>Current values:</h3>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </section>
  );
}
