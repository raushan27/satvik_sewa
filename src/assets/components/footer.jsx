import "./footer.css";
import Github from "../images/github.gif";

function Header() {
  return (
    <div>
      <div className="my-footer">
        <div className="developer-name">
          <p >
            Made By <strong>Team RSRS</strong>
          </p>
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
