import { Box, Typography } from "@mui/material";
import "./Navbar.scss";
import Icon from "../icon/Icon";
import User from "../user/User";

function Navbar() {
	return (
		<div className="navbar">
			<User></User>
			<div>
				<Icon />
			</div>
		</div>
	);
}

export default Navbar;
