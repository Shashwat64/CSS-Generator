import { useState } from "react";
import data from "../../data/data";

export default function MainUI() {
  // Use the full data array in state
  const [value, setValue] = useState(data[0]);

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
    ));

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
