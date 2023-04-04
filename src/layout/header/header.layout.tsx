import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./header.layout.scss";
import Clock from "../../components/clock/clock";
const Header = () => {
  return (
    <header>
      <div className="header-childe">
        <div className="header-container">
          <Clock />
          <div className="flex">
            <input
              type="text"
              className="input-search"
              placeholder="Search !"
            />
            <Search fontSize="large" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
