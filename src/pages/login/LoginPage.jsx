import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../ui/theme/theme";
import { UseLogin } from "../../hooks/UseLogin";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../ui/components/loading/Loading";
import { useState } from "react";
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// async function getUser() {
// 	const {
// 		data: { user },
// 	} = await SupaBase.auth.getUser();
// 	return user;
// }

//invalidating any existing user
// useEffect[
// 	(() => {
// 		queryClient.removeQueries(["useInfo"]);
// 	},
// 	[])
// ];

export default function SignInSide() {
	const [showPassword, setShowPassword] = useState(false);

	const { data, isError, error } = useQuery({
		queryKey: ["userInfo"],
	});

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	console.log(error, isError, data);

	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const { login, isLoading } = UseLogin();

	//query Login
	const handleSubmit = (event) => {
		event.preventDefault();
		login({ email: userName, password: password });
	};
	// const isLoading = true;
	console.log(password, userName);

	return (
		<ThemeProvider theme={theme}>
			{isLoading && <Loading text={"در حال اتصال"} />}
			<Grid
				container
				component="main"
				sx={{ height: "100vh" }}
				overflow={"hidden"}
			>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={6}
					sx={{
						// background: "rgb(10,196,0)",
						background:
							" linear-gradient(150deg, rgba(2,249,80,0.3) 0%, rgba(0,103,16,1) 100%)",
						backgroundSize: "cover",
						backgroundPosition: "left",
					}}
				/>
				<Grid
					item
					xs={12}
					sm={10}
					md={6}
					component={Paper}
					elevation={6}
					square
				>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar sx={{ m: 3, p: 2, width: "5rem", height: "5rem" }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography
							component="h2"
							variant="P"
						>
							ورود کاربران
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 3 }}
						>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="نام کاربری"
								name="email"
								autoComplete="email"
								autoFocus
								dir="rtl"
								variant="outlined"
								InputLabelProps={{ style: { fontWeight: "700" } }}
								value={userName}
								InputProps={{ style: { fontWeight: "700" } }}
								onChange={(e) => setUserName(e.target.value)}
							/>
							<FormControl
								dir="rtl"
								fullWidth
								variant="outlined"
							>
								<InputLabel
									required
									htmlFor="outlined-adornment-password"
								>
									رمز عبور
								</InputLabel>
								<OutlinedInput
									id="outlined-adornment-password"
									sx={{ p: "1", bgcolor: "rgb(232,240,254)" }}
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									type={showPassword ? "text" : "password"}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
									label="Password"
								/>
							</FormControl>
							{/* <FormControlLabel
								control={
									<Checkbox
										value="remember"
										color="primary"
									/>
								}
								label="Remember me"
							/> */}
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 3 }}
							>
								<Typography
									variant="p"
									fontSize={"20px"}
									fontWeight={"bold"}
									className="font"
								>
									ورود
								</Typography>
							</Button>
							<Grid container>
								<Grid
									item
									xs
									sx={{ my: 2 }}
									gap={5}
									alignItems={"center"}
									justifyContent={"center"}
								>
									<Box>
										<Link
											href="#"
											variant="a"
											fontSize={"20px"}
											sx={{
												textDecoration: "none",
												color: "error",
												// width: "15%",
												// margin: "2rem",
												// bgcolor: "red",
											}}
										>
											فراموشی رمز عبور
										</Link>
									</Box>
									<Box my={1}>
										<Typography
											variant="p"
											color="text.secondary"
											// align="right"
											fontWeight={"800"}
											sx={{
												// margin: "4rem auto",
												textAlign: "right",
												direction: "rtl",
											}}
										>
											کلیه حقوق این سایت متعلق به شرکت فن آوران اطلاعات
											ایرانیاین میباشد
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
