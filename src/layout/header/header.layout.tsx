import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./header.layout.scss";
import Clock from "../../components/clock/clock";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-childe">
        <div className="header-container">
          <div className="time">
            <Clock />
          </div>
          <div className="flex">
            <input
              type="text"
              className="input-search"
              placeholder="Search !"
              onClick={() => navigate("/SEARCH")}
            />
            <Search fontSize="large" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
