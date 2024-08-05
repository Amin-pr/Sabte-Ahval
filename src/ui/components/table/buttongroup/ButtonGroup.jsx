/* eslint-disable react/prop-types */
import { Box, Button, ButtonGroup, Divider } from "@mui/material";
import styles from "./ButtonGroup.module.scss";
import UserEditModal from "../../modal/edit user/UserEditModal";
import UserPasswordUpdateModal from "../../modal/new password/UserNewPassword";

function RowButtonGroup({ params, deleteUser }) {
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
				<UserEditModal rowData={params} />
				<UserPasswordUpdateModal rowData={params} />
			</ButtonGroup>
		</Box>
	);
}

export default RowButtonGroup;
