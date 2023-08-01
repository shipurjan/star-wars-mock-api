import { Link } from "react-router-dom"
import "./Header.css"
import StarWarsLogo from "../assets/Star_Wars_Logo.svg"

function Header() {
  return (
    <div className="header">
      <Link to={'/'}>
        <img src={StarWarsLogo} alt="Star Wars" />
      </Link>
      <h3>Mock API App</h3>
    </div>
  )
}

export default Header