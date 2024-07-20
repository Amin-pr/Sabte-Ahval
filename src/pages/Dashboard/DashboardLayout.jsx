import RightBar from "../../ui/components/rightbar/RightBar";
import styles from "./DashboardLayout.module.scss";
import { Outlet } from "react-router-dom";

import { Slide } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
function Dashboard() {
	// error && toast(error.message);
	return (
		<>
			<CssBaseline />
			<Slide
				in
				direction="left"
				timeout={500}
			>
				<div className={styles.holder}>
					{/* {isLoading && <Loading text={"لطفا صبر کنید..."} />} */}
					{/* <Navbar><ToggleButton>asdaddddd</ToggleButton></Navbar> */}
					<RightBar ></RightBar>
					<Outlet />
					{/* <TableComp /> */}
				</div>
			</Slide>
		</>
	);
}

export default Dashboard;
