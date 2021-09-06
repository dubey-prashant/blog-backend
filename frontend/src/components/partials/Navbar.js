const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="Navbar">
          <div className="brand">
            <a href="/"><h1> dubeytech </h1></a>
            <div id="ham-icon" className="" >
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="nav">
            <a href='/'>HOME</a>
            <a href='/courses'>COURSES</a>
            <a href='/projects'>PROJECTS</a>
            <a href='/about'>ABOUT</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar