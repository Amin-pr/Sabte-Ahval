import { useQuery, useQueryClient } from "@tanstack/react-query";
import RightBar from "../../ui/components/rightbar/RightBar";
import styles from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";
import getUser from "../../hooks/UseGetUser";
import Loading from "../../ui/components/loading/Loading";
import { toast } from "react-toastify";
import { Slide } from "@mui/material";
function Dashboard() {
	const queryClient = useQueryClient();
	const {
		data: userInfo,
		error,
		isLoading,
	} = useQuery({
		queryKey: ["userInfo"],
		queryFn: getUser,
		// Return the cached data or fetch it from the cache
		staleTime: 50005,
	});
	// console.log(data);
	error && toast(error.message);
	return (
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
	);
}

export default Dashboard;
