import { Box, Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./RightBar.scss";

function RightBar() {
	return (
		<Box className="right-bar">
			<Box className="toggle-button-holder">
				<ToggleButtonGroup className="toggle-button">
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">3</ToggleButton>
				</ToggleButtonGroup>
				<Divider />
				<ToggleButtonGroup className="toggle-button-holder">
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">3</ToggleButton>
				</ToggleButtonGroup>
				<Divider />

				<ToggleButtonGroup className="toggle-button-holder">
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">2</ToggleButton>
					<ToggleButton className="main-button">3</ToggleButton>
				</ToggleButtonGroup>
			</Box>
		</Box>
	);
}

export default RightBar;
