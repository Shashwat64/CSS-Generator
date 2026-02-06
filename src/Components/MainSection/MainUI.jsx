import {useState} from 'react'

export default function MainUI(){
  
  function handleChange(e) {
    setValue(Number(e.target.value));
  }

  const [value, setValue] = useState(50)
  
  
  return(
    <section className="main-ui">
      <div className="user-input-section">
        <h2>CSS box-shadow</h2>
        <div className="control">
          <div className="top-row">
            <label htmlFor="horizontal">Horizontal</label>

            <input
              id="horizontal"
              className="num-input"
              type="number"
              min="0"
              max="20"
              value={value}
              onChange={handleChange}
            />
          </div>

          <input
            className="range-input"
            type="range"
            min="0"
            max="20"
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="output-section">
        output
      </div>
    </section>
  )
}