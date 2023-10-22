import "./header.css";
import Logo from "../images/logo.png";
import logoName from "../images/logo-name.png";
import Github from "../images/github.gif";

function Header() {
  return (
    <div>
      <div className="my-header">
        <img className="logo" src={Logo} alt="App Logo" />
        <img className="logo-name" src={logoName} alt="App Name" />
        <a href="https://github.com/raushan27/satvik_sewa">
          <img className="github" src={Github} alt="git-logo"></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
