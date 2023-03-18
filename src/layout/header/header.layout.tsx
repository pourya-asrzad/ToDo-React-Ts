import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import './header.layout.scss'
const Header = ()=>{
    return <header>
        <div className="header-childe">
            <input type= 'text' className="input-search" placeholder="Search !" />
           <button className="button-search" ><Search  fontSize="large"/></button>
        </div>
    </header>
}
export default Header;