import { hexToRgba } from '../../data/helperFunctions'

export default function TextShadow({value ,setValue, setCssCode}){

  const inputHtml= <p>Test</p>

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