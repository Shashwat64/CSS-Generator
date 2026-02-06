export default function MainUI(){
  
  function valueOutput(value){
    console.log(value)
  }
  
  
  return(
    <section className="main-ui">
      <div className="user-input-section">
        <h2>CSS box-shadow</h2>
        <label>
          Horizontal
          <input 
            type="range" 
            min="0"
            max="100"
            onChange={(e)=>valueOutput(e.target.value)}
          />
        </label>
      </div>
      <div className="output-section">
        output
      </div>
    </section>
  )
}