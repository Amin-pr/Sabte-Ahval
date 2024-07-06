import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
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
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import SupaBase from "../../api/SupaBase";
import Loading from "../../ui/components/loading/Loading";

// function Copyright(props) {
// 	return (

// 	);
// }

async function getUser() {
	const {
		data: { user },
	} = await SupaBase.auth.getUser();
	return user;
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignInSide() {
	//invalidating any existing user
	const queryClient = useQueryClient();
	const { isError, error } = useQuery({
		queryKey: ["userInfo"], // Unique key for the query
		queryFn: () => queryClient.invalidateQueries(["useInfo"]), 
	});

	console.log(error, isError);

	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();

	const { login, isLoading } = useLogin();

	//query Login
	const handleSubmit = (event) => {
		event.preventDefault();
		login({ email: userName, password: password });
	};
	// const isLoading = true;
	console.log(isLoading);

	return (
		<ThemeProvider theme={theme}>
			{isLoading && <Loading text={"در حال اتصال"} />}
			<Grid
				container
				component="main"
				sx={{ height: "100vh" }}
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
								InputProps={{ style: { fontWeight: "700" } }}
								onChange={(e) => setUserName(e.target.value)}
							/>
							<TextField
								dir="rtl"
								margin="normal"
								required
								fullWidth
								name="password"
								label="رمز عبور"
								type="password"
								id="password"
								autoComplete="current-password"
								InputLabelProps={{ style: { fontWeight: "700" } }}
								onChange={(e) => setPassword(e.target.value)}
							/>
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
									sx={{ my: 8 }}
								>
									<Link
										href="#"
										variant="a"
										fontSize={"20px"}
										sx={{ textDecoration: "none", color: "error" }}
									>
										فراموشی رمز عبور
									</Link>
								</Grid>
								<Grid item>
									<Typography
										variant="p"
										color="text.secondary"
										// align="right"
										fontWeight={"800"}
										sx={{
											margin: "4rem auto",
											// textAlign: "right",
											// direction: "rtl",
										}}
									>
										کلیه حقوق این سایت متعلق به شرکت فن آوران اطلاعات ایرانیاین
										میباشد
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
