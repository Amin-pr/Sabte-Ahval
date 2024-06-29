import Navbar from "../../ui/components/navbar/Navbar";
import RightBar from "../../ui/components/rightbar/RightBar";
import styles from "./Dashboard.module.scss";
import TableComp from "../../ui/components/table/TableComp";
function Dashboard() {
	return (
		<div className={styles.holder}>
			{/* <Navbar><ToggleButton>asdaddddd</ToggleButton></Navbar> */}
			<RightBar></RightBar>
			<TableComp />
		</div>
	);
}

export default Dashboard;
