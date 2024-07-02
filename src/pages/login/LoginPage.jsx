import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import theme from "../../ui/theme/theme";

// function Copyright(props) {
// 	return (

// 	);
// }

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignInSide() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<ThemeProvider theme={theme}>
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
						<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
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
							sx={{ mt: 1 }}
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
								sx={{ mt: 3, mb: 2 }}
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
								>
									<Link
										href="#"
										variant="a"
										fontSize={"20px"}
									>
										فراموشی رمز عبور
									</Link>
								</Grid>

								<Typography
									variant="p"
									color="text.secondary"
									align="right"
									fontWeight={"600"}
									sx={{ margin: "2rem auto" }}
								>
									کلیه حقوق این سایت متعلق به شرکت فن آوران اطلاعات ایرانیاین
									میباشد
								</Typography>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
