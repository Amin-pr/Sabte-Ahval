/* eslint-disable react/prop-types */
import {
	Box,
	Button,
	CssBaseline,
	FormControl,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import styles from "./UserNewPassword.module.scss";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/theme";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../loading/Loading";
import UseUpdatePassword from "../../../../hooks/UseUpdatePassword";

function UserPasswordUpdateModal({ rowData }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const {
		updatePassword,
		isLoading,
		data: userPassUpdateRes,
	} = UseUpdatePassword();

	const handleSubmit = (event) => {
		const data = {
			id: rowData?.id,
			password: password,
			password_confirmation: passwordConfirm,
		};
		console.log(data);
		event.preventDefault();
		updatePassword(data);
	};

	const queryClient = useQueryClient();

	//close modal if response ok
	useEffect(() => {
		if (userPassUpdateRes?.success === true) {
			setOpen(false);
		}
		queryClient.refetchQueries("users");
	}, [queryClient, userPassUpdateRes?.success]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Button
				onClick={handleOpen}
				className={styles.button}
			>
				تغییر رمز
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={styles.modal}>
					{isLoading && <Loading text={"...لطفا صبر کنید"} />}
					<Box className={styles.headerContainer}>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							className={styles.header}
						>
							رمز جدید را وارد کنید
						</Typography>
					</Box>
					<Box className={styles.formContainer}>
						<FormControl className={styles.formControl}>
							<TextField
								type="text"
								label="رمز"
								size="small"
								dir="rtl"
								autoComplete="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								// error={data?.errors?.name}
								// helperText={data?.errors?.name}
							/>
						</FormControl>
						<FormControl className={styles.formControl}>
							<TextField
								type="text"
								label="تکرار رمز"
								size="small"
								dir="rtl"
								autoComplete="Password"
								value={passwordConfirm}
								onChange={(e) => setPasswordConfirm(e.target.value)}
								// error={data?.errors?.name}
								// helperText={data?.errors?.name}
							/>
						</FormControl>
						<Box>
							<Button
								type="submit"
								variant="contained"
								color="success"
								onClick={handleSubmit}
							>
								تغییر رمز
							</Button>
						</Box>
					</Box>
				</Box>
			</Modal>
		</ThemeProvider>
	);
}

export default UserPasswordUpdateModal;
