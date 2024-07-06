import { Box, CircularProgress, Typography } from "@mui/material";

function Loading({ text }) {
	return (
		<Box
			display={"flex"}
			position={"absolute"}
			width={"100vw"}
			height={"100vh"}
			// bgcolor={"red"}
			alignContent={"center"}
			justifyItems={"center"}
			sx={{ backdropFilter: "blur(5px)", zIndex: "9999" }}
			overflow={"hidden"}
		>
			<Box
				sx={{
					position: "absolute",
					top: "calc(50% - 5rem)",
					left: "calc(50% - 5rem)",
					// width: "10rem",
					// height: "10rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography
					variant="p"
					fontWeight={"800"}
					fontSize={"25px"}
					sx={{ textWrap: "nowrap", m: 2 }}
				>
					{text}
				</Typography>
				<CircularProgress color="success"></CircularProgress>
			</Box>
		</Box>
	);
}

export default Loading;
