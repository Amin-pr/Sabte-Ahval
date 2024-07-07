import { useQuery, useQueryClient } from "@tanstack/react-query";
import RightBar from "../../ui/components/rightbar/RightBar";
import styles from "./DashboardLayout.module.scss";
import { Outlet } from "react-router-dom";
import getUser from "../../hooks/UseGetUser";
import Loading from "../../ui/components/loading/Loading";
import { toast } from "react-toastify";
import { Slide } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
function Dashboard() {
	const queryClient = useQueryClient();
	const {
		data: userInfo,
		error,
		isLoading,
	} = useQuery({
		queryKey: ["userInfo"],
		queryFn: getUser,
		staleTime: 50005,
	});

	error && toast(error.message);
	return (
		<>
			<CssBaseline />
			<Slide
				in
				direction="left"
				timeout={500}
			>
				<div className={styles.holder}>
					{isLoading && <Loading text={"لطفا صبر کنید..."} />}
					{/* <Navbar><ToggleButton>asdaddddd</ToggleButton></Navbar> */}
					<RightBar userInfo={userInfo}></RightBar>
					<Outlet />
					{/* <TableComp /> */}
				</div>
			</Slide>
		</>
	);
}

export default Dashboard;
