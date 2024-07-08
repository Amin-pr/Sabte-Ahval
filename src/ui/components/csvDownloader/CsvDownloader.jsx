import { Box, Button } from "@mui/material";
import React from "react";
import { downloadExcel } from "react-export-table-to-excel";

// eslint-disable-next-line react/prop-types
const Test = ({ header, row }) => {

	console.log(row);

	const body2 = [
		{ firstname: "Edison", lastname: "Padilla", age: 14 },
		{ firstname: "Cheila", lastname: "Rodrigez", age: 56 },
	];

	function handleDownloadExcel() {
		downloadExcel({
			fileName: "خروجی",
			sheet: "خروجی",
			tablePayload: {
				header,
				// accept two different data structures
				body: row || body2,
			},
		});
	}

	return (
		<Box>
			<Button onClick={handleDownloadExcel}>download excel</Button>
		</Box>
	);
};

export default Test;
