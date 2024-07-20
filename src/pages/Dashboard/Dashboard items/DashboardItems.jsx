import { History, List, QuestionAnswer } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
// import styles from "../Dashboard items/"
import styles from "../Dashboard items/DashboardItems.module.scss";
import { useLocation, useParams } from "react-router-dom";
function Dashboarditems() {
	const items = [
		{ name: "اطلاعات دفاتر", icon: <List /> },
		{ name: "سوابق دفاتر", icon: <History /> },
		{ name: "نتاج نظرسنجی", icon: <QuestionAnswer /> },
		{ name: "نیج نظرسنجی", icon: <QuestionAnswer /> },
		{ name: "تایج نظرسنجی", icon: <QuestionAnswer /> },
		{ name: "تایج نرسنجی", icon: <QuestionAnswer /> },
	];
	const location = useLocation();
	const { state } = location;
	console.log(state);
	return (
		<Box className={styles.holder}>
			<Grid
				container
				wrap="wrap"
				direction={"row"}
				gap={2}
				justifyContent={"space-around"}
			>
				{items.map((item) => (
					<Grid
						key={item.name}
						className={styles.cardItem}
						item
						xs={4}
						sm={5}
					>
						<Box className={styles.item}>
							<Typography variant="p">{item.name}</Typography>
							{item.icon}
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default Dashboarditems;
