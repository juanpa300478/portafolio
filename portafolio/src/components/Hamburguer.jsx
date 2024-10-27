import '../css/hamburger.css'
const Hamburger = ({open, handleClick}) => {
    const text = open? 'open' : ''

    return(
        <div className="menu-activador md:invisible" onClick={handleClick}>
            
        <label>
          <span className={`menu-activador-linea ${text}`}></span>
          <span className={`menu-activador-linea ${text}`}></span>
          <span className={`menu-activador-linea ${text}`}></span>
        </label>
    </div>
    )
}

export default Hamburger


