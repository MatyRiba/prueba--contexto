import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
    <div className="container">
      <Link to={"/"}><img className="navbar-brand" src="../logo/LaFlorita2 (2).jpg" alt="logo de La Florita"></img></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item fs-5 p-2">
          <NavLink className="nav-link text-decoration-none text-dark" activeClassName={"active"} to={"/"}>Productos</NavLink>
        </li>
        <li className="nav-item fs-5 p-2">
          <NavLink className="nav-link" activeClassName={"active"} to={"/category/flores secas"}>Flores Secas</NavLink>
        </li>
        <li className="nav-item fs-5 p-2">
          <NavLink className="nav-link" activeClassName={"active"} to={"/category/decoracion"}>Decoracion</NavLink>
        </li>
        <li className="nav-item fs-5 p-2">
          <NavLink className="nav-link" activeClassName={"active"} to={"/category/para regalar"}>Para Regalar</NavLink>
        </li>
      </ul>
    </div>

    </div>
    <button type="button" className="btn btn-light mx-4"><CartWidget/></button>
  </nav>
  
 
  )
}

export default Navbar