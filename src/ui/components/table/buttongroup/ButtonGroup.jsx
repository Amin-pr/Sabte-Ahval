/* eslint-disable react/prop-types */
import { Box, Button, ButtonGroup, Divider } from "@mui/material";
import styles from "./ButtonGroup.module.scss";

function RowButtonGroup({ params, deleteUser, editUser, newPassword }) {
	return (
		<Box className={styles.holder}>
			<ButtonGroup
				className={styles.buttonGroup}
				fullWidth
				variant="outlined"
				aria-label="Basic button group"
				color="error"
			>
				<Button
					className={styles.button}
					onClick={() => deleteUser(params.id)}
				>
					حذف
				</Button>
				<Divider />
				<Button
					className={styles.button}
					onClick={() => editUser(params)}
				>
					تغییر نام{" "}
				</Button>
				<Button className={styles.button}>تغییر رمز</Button>
			</ButtonGroup>
		</Box>
	);
}

export default RowButtonGroup;
