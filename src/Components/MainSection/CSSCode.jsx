export default function CSSCode(props){
  return(
    <section className="css-code-section">
      <div className="copy-btn-div">
        <p>CSS Code: </p>
        <button>Copy</button>
      </div>
      <div className="css-code">
        {props.cssCode}
      </div> 
    </section>
  )
}