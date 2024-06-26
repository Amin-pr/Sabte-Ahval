import { Box, Button, ToggleButton } from "@mui/material";
import Navbar from "../../ui/components/navbar/Navbar";
import RightBar from "../../ui/components/rightbar/RightBar";
import "./Dashboard.scss";
import Icon from "../../ui/components/icon/Icon";
function Dashboard() {
	return (
		<Box className="holder">
			<Navbar>{/* <ToggleButton>asdaddddd</ToggleButton> */}</Navbar>
			<RightBar></RightBar>
		</Box>
	);
}

export default Dashboard;
