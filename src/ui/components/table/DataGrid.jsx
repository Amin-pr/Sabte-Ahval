/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import CsvDownloader from "../csvDownloader/CsvDownloader";
import styles from "../table/DataGrid.module.scss";
import { faIR } from "@mui/x-data-grid/locales";
import { useState } from "react";
import { Radio } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
export default function DataTable({ columns, rows, exportAbility }) {
	const downloadCols = columns?.map((column) => column.headerName);

	const [selectedRows, setSelectedRows] = useState();
	const selectedRowsData = selectedRows?.map((rowId) =>
		rows?.find((row) => row.id === rowId)
	);
	const CustomCheckbox = () => (
		<Radio
			icon={<LinkedIn />}
			checkedIcon={<LinkedIn style={{ color: "green" }} />}
		/>
	);
	return (
		<Box className={styles.holder}>
			<DataGrid
				scrollbarSize={1}
				col
				rows={rows}
				columns={columns}
				localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
				pageSizeOptions={[5, 10, 25, 100]}
				checkboxSelection
				rowSelectionModel={selectedRows}
				onRowSelectionModelChange={(newselection) =>
					setSelectedRows(newselection)
				}
				components={{
					Checkbox: CustomCheckbox,
				}}
				head
				sx={{
					p: "1rem",
					boxShadow: 2,
					border: 1,
					borderColor: "rgb(0, 103, 16)",
					"& .MuiDataGrid-cell": {
						textAlign: "center",
						borderLeft: "1px solid rgb(0, 103, 16)",
					},
					"&.Mui-checked": {
						color: "green !important",
					},
					// "& .MuiDataGrid-cell": { textAlign: "center" },
				}}
			/>
			{exportAbility === true && (
				<Box>
					<CsvDownloader
						header={downloadCols}
						row={selectedRowsData}
					/>
				</Box>
			)}
		</Box>
	);
}
