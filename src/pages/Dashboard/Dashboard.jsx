import Navbar from "../../ui/components/navbar/Navbar";
import RightBar from "../../ui/components/rightbar/RightBar";
import classes from "./Dashboard.module.scss";
function Dashboard() {
	return (
		<div className={classes.holder}>
			<Navbar>{/* <ToggleButton>asdaddddd</ToggleButton> */}</Navbar>
			<RightBar></RightBar>
		</div>
	);
}

export default Dashboard;
