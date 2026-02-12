import data from '../../data/data'

export default function Navbar(props){


  const navHtml = data.map((prop , i)=> (
    <button 
      key={i} 
      className={prop.name === props.activeProp ? "active nav-btn" : "nav-btn"}
      onClick={() => {
        const found = data.find(p => p.name === prop.name);
        props.setActiveProp(prop.name);
        props.setValue(found);
      }}

    >
      {prop.name}
    </button>
  ))

  return(
    <nav className="navbar">
      {navHtml}
    </nav>
  )
}