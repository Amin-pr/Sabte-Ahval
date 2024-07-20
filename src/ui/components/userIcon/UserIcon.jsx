import { Person } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useLogout } from "../../../hooks/UseLogout";

// eslint-disable-next-line react/prop-types
export default function UserIcon({ userName, token }) {
	const { logout, isLoading } = useLogout();
	// console.log(token);

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (event) => {
		event.preventDefault();
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				color="inherit"
			>
				<Person />
				{userName}
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={() => logout({ token: token })}>
					<p>خروج</p>
				</MenuItem>
			</Menu>
		</div>
	);
}
