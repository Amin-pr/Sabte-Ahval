/* eslint-disable react/prop-types */
import {
	Box,
	Button,
	CssBaseline,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import styles from "./UserEditModal.module.scss";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/theme";
import UseEditUser from "../../../../hooks/UseEditUser";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../loading/Loading";

function UserEditModal({ rowData }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [refId, setRefId] = useState("");

	const { edit, isLoading, data: useEditRes } = UseEditUser();

	const handleSubmit = (event) => {
		const data = {
			id: rowData?.id,
			username: username,
			phone_number: phoneNumber,
			role_id: refId,
			name: name,
		};
		event.preventDefault();
		console.log(data);
		edit(data);
	};

	const queryClient = useQueryClient();

	//close modal if response ok
	useEffect(() => {
		if (useEditRes?.success === true) {
			setOpen(false);
		}
		queryClient.refetchQueries("users");
	}, [queryClient, useEditRes?.success]);
	console.log(isLoading);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Button
				onClick={handleOpen}
				className={styles.button}
			>
				ویرایش
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
							اطلاعات جدید را وارد کنید
						</Typography>
					</Box>
					<Box className={styles.formContainer}>
						<FormControl className={styles.formControl}>
							<TextField
								type="text"
								label="نام"
								size="small"
								dir="rtl"
								autoComplete="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								// error={data?.errors?.name}
								// helperText={data?.errors?.name}
							/>
						</FormControl>

						<FormControl className={styles.formControl}>
							<TextField
								type="text"
								label="نام کاربری"
								size="small"
								dir="rtl"
								autoComplete="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								// helperText={data?.errors?.username}
								// error={data?.errors?.username}
							/>
						</FormControl>
						<FormControl className={styles.formControl}>
							<TextField
								type="tel"
								label="تلفن"
								size="small"
								dir="rtl"
								autoComplete="phone"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								// helperText={data?.errors?.phone_number}
								// error={data?.errors?.phone_number}
								sx={{ maxWidth: "250px" }}
							/>
						</FormControl>

						<FormControl
							sx={{ minWidth: 120 }}
							size="small"
							about=""
							// error={data?.errors?.role_id}
							className={styles.formControl}
						>
							<InputLabel id="demo-select-small-label">دسترسی</InputLabel>
							<Select
								labelId="demo-select-small-label"
								id="demo-select-small"
								value={refId}
								label="دسترسی"
								onChange={(e) => setRefId(e.target.value)}
								className={styles.select}
							>
								<MenuItem value={2001}> ادمین</MenuItem>
								<MenuItem value={2002}>سطح یک</MenuItem>
								<MenuItem value={2003}>سطح دو</MenuItem>
								<MenuItem value={2004}>سطح سه</MenuItem>
							</Select>
						</FormControl>
						<Box>
							<Button
								type="submit"
								variant="contained"
								color="success"
								onClick={handleSubmit}
							>
								ساخت کاربر
							</Button>
						</Box>
					</Box>
				</Box>
			</Modal>
		</ThemeProvider>
	);
}

export default UserEditModal;
