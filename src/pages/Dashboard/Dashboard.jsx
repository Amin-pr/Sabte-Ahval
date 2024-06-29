
import RightBar from "../../ui/components/rightbar/RightBar";
import styles from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";
function Dashboard( ) {
	return (
		<div className={styles.holder}>
			{/* <Navbar><ToggleButton>asdaddddd</ToggleButton></Navbar> */}
			<RightBar></RightBar>
			<Outlet />
			{/* <TableComp /> */}
		</div>
	);
}

export default Dashboard;
