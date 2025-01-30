import { navlink } from "../data/data";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((value, i) => (
              <Link to={value.url} key={i} data-aos="zoom-in-left">
                {value.text}
              </Link>
            ))}
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
