import data from '../../data/data'

export default function Navbar(props){


  const navHtml = data.map((prop , i)=> (
    <button 
      key={i} 
      className={prop.name === props.activeProp ? "active nav-btn" : "nav-btn"}
      onClick={()=>(props.setActiveProp(prop.name))}
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