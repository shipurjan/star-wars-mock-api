import StarWarsLogo from "../assets/Star_Wars_Logo.svg"

function Header() {
  return (
    <h2 className="header">
    <img src={StarWarsLogo} alt="Star Wars" /> 
    <div>Mock API List</div>
    </h2>
  )
}

export default Header