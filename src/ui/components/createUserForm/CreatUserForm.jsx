import styles from "./CreatUserForm.module.scss";
import { useEffect, useState } from "react";
import useRegister from "../../../hooks/UseCreateUser";
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	ThemeProvider,
} from "@mui/material";
import theme from "../../theme/theme";
import Loading from "../loading/Loading";
import { useQueryClient } from "@tanstack/react-query";

const CreateUserForm = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [refId, setRefId] = useState("");

	const { register, isLoading, data } = useRegister();
	const queryClient = useQueryClient();

	const handleSubmit = (event) => {
		const data = {
			username: username,
			password: password,
			phone_number: phoneNumber,
			role_id: refId,
			name: name,
		};
		event.preventDefault();
		register(data);
	};

	console.log(data);
	useEffect(() => {
		if (data?.success === true) {
			queryClient.resetQueries(["users"]);
		}
	}, [data?.success, queryClient]);

	if (isLoading) return <Loading text={"...لطفا صبر کنید"} />;

	return (
		<ThemeProvider theme={theme}>
			<FormControl
				// className={styles.holder}
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
					margin: "2rem",
					alignItems: "start",
				}}
				onSubmit={handleSubmit}
			>
				<TextField
					type="text"
					label="نام"
					size="small"
					dir="rtl"
					autoComplete="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					error={data?.errors?.name}
					helperText={data?.errors?.name}
				/>
				<TextField
					type="text"
					label="نام کاربری"
					size="small"
					dir="rtl"
					autoComplete="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					type="tel"
					label="تلفن"
					size="small"
					dir="rtl"
					autoComplete="phone"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
				<TextField
					type="text"
					label="رمز عبور"
					size="small"
					dir="rtl"
					autoComplete="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<FormControl
					sx={{ m: 1, minWidth: 120 }}
					size="small"
					about=""
				>
					<InputLabel id="demo-select-small-label">دسترسی</InputLabel>
					<Select
						labelId="demo-select-small-label"
						id="demo-select-small"
						value={refId}
						label="دسترسی"
						onChange={(e) => setRefId(e.target.value)}
					>
						<MenuItem value={2001}> ادمین</MenuItem>
						<MenuItem value={2002}>سطح یک</MenuItem>
						<MenuItem value={2003}>سطح دو</MenuItem>
						<MenuItem value={2004}>سطح سه</MenuItem>
					</Select>
				</FormControl>

				<Box margin={5}>
					<Button
						type="submit"
						variant="contained"
						onClick={handleSubmit}
					>
						ساخت کاربر
					</Button>
				</Box>
			</FormControl>
		</ThemeProvider>
	);
};

export default CreateUserForm;
