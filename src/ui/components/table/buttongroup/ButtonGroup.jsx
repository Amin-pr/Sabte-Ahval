import { Box, Button, ButtonGroup } from "@mui/material";
import styles from "./ButtonGroup.module.scss";
function RowButtonGroup() {
	return (
		<Box sx={{direction:"ltr"}}>
			<ButtonGroup
				className={styles.buttonGroup}
				fullWidth
				variant="contained"
				aria-label="Basic button group"
				color="error"
			>
				<Button>حذف</Button>
				<Button>تغییر نام </Button>
				<Button>تغییر رمز</Button>
			</ButtonGroup>
		</Box>
	);
}

export default RowButtonGroup;
