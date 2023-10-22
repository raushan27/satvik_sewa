import "./footer.css";
import logoName from "../images/logo-name.png";
import Github from "../images/github.gif";

function Header() {
  return (
    <div>
      <div className="my-footer">
        <div className="developer-name">
          <p style={{ fontSize: "smaller" }}>
            Made By <strong>Team RSRS</strong>
          </p>
        </div>
        <div>
          <img
            style={{ height: "23px", margin: "10px" }}
            className=""
            src={logoName}
            alt="App Name"
          />
          <a href="https://github.com/raushan27/satvik_sewa">
            <img
              style={{ height: "22px", margin: "10px" }}
              src={Github}
              alt="git-logo"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
