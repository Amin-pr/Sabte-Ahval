import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
	direction: "rtl",
	typography: {
		fontFamily: [
			`"IRANSans-web"`,
			"Gill Sans",
			"Gill Sans MT",
			"Calibri",
			"Trebuchet MS",
		].join(", "),
	},
	palette: {
		primary: {
			main: "#006710",
			light: "#56a94f",
			dark: "#003700",
			contrastText: "#fff",
		},
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					// Default state of text input field font.
					"& .MuiInputBase-input.MuiInput-input": {
						fontFamily: "Manrope",
						color: "#2A2B2F",
					},

					// Default state of underline.
					"& .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl::before":
						{
							borderBottomColor: red[900],
						},

					// On hover state of underline.
					"& .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl:hover::before":
						{
							borderBottomColor: "blue",
						},

					// On focus state of underline.
					"& .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.Mui-focused::after":
						{
							borderBottom: "2px solid #2E98EF",
						},

					// Default state of label.
					"& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-standard.MuiFormLabel-colorPrimary.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-standard":
						{
							color: red[900],
						},

					// On focus state of label (after text is entered into the form field).
					"& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-shrink.MuiInputLabel-standard.MuiFormLabel-colorPrimary.MuiFormLabel-filled.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-shrink.MuiInputLabel-standard":
						{
							color: "#2E98EF",
						},
				},
			},
		},
	},

	overrides: {
		MuiFormControl: {
			root: { color: "red" },
		},

		MuiTextField: {
			root: {
				// left: "90px !important",
				// fontSize: "240px",
				fontWeight: "800",
				fontFamily: [
					"Gill Sans",
					"Gill Sans MT",
					"Calibri",
					"Trebuchet MS",
				].join(", "),
			},
		},
		MuiInputLabel: {
			root: {
				// position: "absolute !important",
				// fontSize: "240px",
				fontFamily: [
					"Gill Sans",
					"Gill Sans MT",
					"Calibri",
					"Trebuchet MS",
				].join(", "),
			},
			shrink: {
				position: "absolute",
				right: "20px",
				dir: "rtl",
			},
		},
	},
});

export default theme;
