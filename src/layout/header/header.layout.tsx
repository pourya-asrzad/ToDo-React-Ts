import { TextField } from "@mui/material";
import './header.layout.scss'
const Header = ()=>{
    return <header>
        <div className="header-childe">
            <TextField id="outlined-basic" label="Search" />
            <span>icon place</span>
        </div>
    </header>
}
export default Header;