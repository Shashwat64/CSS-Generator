import { hexToRgba } from '../../data/helperFunctions'

export default function TextShadow({value ,setValue, setCssCode, activeProp}){

  const inputHtml= <p>Test</p>

  console.log(value, activeProp)

  return(

    <>
      <div className="user-input-section">
          <h2>CSS Box Shadow</h2>
          {inputHtml}
        </div>

        <div className="output-section">
          <p className='text-shadow-output'
            style={{}}
          >Text Content</p>
        </div>
    </>
      
  )
}