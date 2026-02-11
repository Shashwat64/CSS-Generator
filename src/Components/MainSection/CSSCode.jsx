export default function CSSCode(props){

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.cssCode);
      console.log("Copied!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return(
    <section className="css-code-section">
      <div className="copy-btn-div">
        <p>CSS Code: </p>
        <button onClick={handleCopy}>Copy</button>
      </div>
      <pre className="css-code" style={{ whiteSpace: 'pre-wrap' }}>
        <code>{props.cssCode}</code>
      </pre>
    </section>
  )
}